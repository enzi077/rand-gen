import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, SafeAreaView} from 'react-native'
import { Appbar, List, Text, Portal, Modal, Button, Provider} from 'react-native-paper'
import 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'react-native-axios'
import {BASE_API_URL} from '../serverRoutes'

const ShowData = ({navigation}) => {
    const [data,setData]=useState()
    const [visible,setVisible]=useState(false)
    
    useEffect(() => {
        getData()
    }, [data])
    
    const showModal=()=> setVisible(true)
    const hideModal=()=>setVisible(false)
    
    const getData=async()=>{
        const response=await fetch(`${BASE_API_URL}/get`)
        const participants=await response.json()
        setData(participants)
    }
    
    const delData=async()=>{
        if(data){
            await axios.delete(`${BASE_API_URL}/delete`)
                   .then(res=>res.data)
            setData()
            setVisible(false)
        }
    }
    
    return (
        <Provider>
            <SafeAreaView>
            <Appbar>
                <Appbar.Action
                    icon="dots-vertical"
                    onPress={()=>navigation.openDrawer()}
                />
                <Appbar.Content
                    title="Registered"
                />
                <Appbar.Action
                    icon="delete"
                    onPress={()=>showModal()}
                />
            </Appbar>
            <Portal>
                <Modal visible={visible} onDismiss={()=>hideModal()} contentContainerStyle={styles.showData__modal}>
                    <Text>Are you sure you want to delete all your data? You won't be
                        able to recover once deleted.
                    </Text>
                    <Button
                        mode="text"
                        onPress={()=>hideModal()}
                        style={styles.showData__cancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        mode="text"
                        onPress={()=>delData()}
                        style={styles.showData__yes}
                    >
                        Yes
                    </Button>
                </Modal>
            </Portal>
            <ScrollView style={styles.showData__view}>
            {
                data && data.map(participant=>{
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
        </Provider>
    )
}

export default ShowData

const styles = StyleSheet.create({
    showData__modal:{
        backgroundColor:'white',
        padding: 20,
        borderRadius: 5,
        margin: 10,
        display: 'flex'
    },
    showData__cancel:{
        margin: 10,
    },
    showData__yes:{
        margin: 10,
    },
    showData__view:{
        marginBottom: 95
    }
})
