import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  Alert,
  Keyboard
} from 'react-native';
import { Appbar, Button, Title,List } from 'react-native-paper'
import 'react-native-vector-icons/MaterialCommunityIcons'
import {BASE_API_URL} from '../serverRoutes'

const App=({navigation}) => {
    const [data,setData]=useState()
    const [text,setText]=useState()
    const [randomWinners,setRandomWinners]=useState()
    const inputRef=React.createRef()
    
    useEffect(() => {
        getData()
    }, [randomWinners,data])
    
    const getData=async()=>{
        const response=await fetch(`${BASE_API_URL}/get`)
        const participants=await response.json()
        setData(participants)
    }
    
    const randomize=()=>{
        Keyboard.dismiss()
        if(text<=data.length){
            let randArray=[]
            let tempData=[]
            for(let i=0;i<text;i++){
                tempData=data
                let removed=tempData.splice((Math.floor(Math.random() * data.length)),1)
                randArray.push(removed[0])
            }
            setRandomWinners(randArray)
            inputRef.current.clear()
            setText()
        }else{
            Alert.alert(
                "Invalid input",
                "You seem to have entered a value exceeding the total",
                [{
                    text: "OK"
                }]
            )
            inputRef.current.clear()
            setText()
        }
    }
    
  return (
    <>
        <SafeAreaView>
            <StatusBar backgroundColor="#6600cc"/>
            <Appbar>
                <Appbar.Action
                    icon="dots-vertical"
                    onPress={()=>navigation.openDrawer()}
                />
                <Appbar.Content
                    title="Home"
                />
                <Appbar.Action
                    icon="refresh"
                    onPress={()=>setRandomWinners()}
                />
            </Appbar>
            <ScrollView
                keyboardShouldPersistTaps='always'
                style={styles.app__view}
            >
                {
                    data && 
                    <>
                        <TextInput
                            placeholder="Enter the number of winners to fetch"
                            onChangeText={(text)=>setText(text)}
                            ref={inputRef}
                            keyboardType="numeric"
                        />
                        <Button 
                            mode="outlined" 
                            onPress={()=>randomize()}
                            disabled={!text}
                            style={styles.app__btn}
                        >
                            Generate winners
                        </Button>
                        <Title style={styles.app__text}>Total registered: {data.length}</Title>
                    </>
                }
                {
                    randomWinners &&
                    randomWinners.map((participant)=>{
                        const {_id,name,username,phone,email}=participant
                        let concatStr=`Insta Username: ${username}\nContact: ${phone}\nEmail: ${email}`
                        return(
                            <List.Item
                                key={_id}
                                title={name}
                                description={concatStr}
                                descriptionNumberOfLines={3}
                            />
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    app__view:{
        margin:5,
        marginBottom: 90
    },
    app__btn:{
        marginTop: 5,
        marginBottom: 5
    },
    app__text:{
        marginLeft: 15
    }
})

export default App;
