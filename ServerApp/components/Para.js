import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Keyboard } from 'react-native'
import { Appbar, Button, Text, TextInput,} from 'react-native-paper'
import 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'react-native-axios'
import {BASE_API_URL} from '../serverRoutes'

const Para = ({navigation}) => {
    const [para,setPara]=useState()
    const [newPara,setNewPara]=useState('')
    
    useEffect(()=>{
        getPara()
    },[para])
    
    const getPara=()=>{
        axios.get(`${BASE_API_URL}/para`)
                   .then(res=>setPara(res.data))
                   .catch(err=>console.log(err))
    }
    
    const handleSubmit=()=>{
        Keyboard.dismiss()
        let newIntro=newPara
        let url=`${BASE_API_URL}/para/${para[0]._id}`
        axios.patch(url,{
            description: newIntro
        })
             .then((res)=>console.log(res))
             .catch(err=>console.log(err))
    }
    
    return (
        <SafeAreaView>
            <Appbar>
                <Appbar.Action
                    icon="dots-vertical"
                    onPress={()=>navigation.openDrawer()}
                />
                <Appbar.Content
                    title="Intro Paragraph"
                />
            </Appbar>
            <ScrollView
                keyboardShouldPersistTaps="always"
            >
                {
                    para &&
                    <View style={styles.para__view}>
                        <Text style={styles.para__text}>{para[0].description}</Text>
                        <TextInput
                            label="Intro Para"
                            name="description"
                            type="text"
                            style={styles.para__input}
                            onChangeText={(text)=>setNewPara(text)}
                        />
                        <Button 
                            variant="outlined"
                            type="submit"
                            onPress={()=>handleSubmit()}
                            style={styles.para__btn}
                            disabled={!newPara}
                        >
                            Update
                        </Button>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Para

const styles = StyleSheet.create({
    para__view:{
        margin: 10,
        marginBottom: 95,
        display: 'flex'
    },
    para__text:{
        marginBottom: 10
    },
    para__input:{
        marginTop: 10,
        marginBottom: 10,
    },
    para__btn:{
        marginTop: 10
    }
})
