import React, { useEffect, useState} from 'react';
import {Grid,Card, CardContent, Typography, TextField, Button, CircularProgress} from '@material-ui/core';
import {styles} from './AppStyles.js';
import {BASE_API_URL} from './serverRoutes'

function App() {
    const [name,updateName]=useState('')
    const [username,updateUsername]=useState('')
    const [phone,updatePhone]=useState(0)
    const [email,updateEmail]=useState('')
    const [para,setPara]=useState()
    const [submitUrl,setSubmitUrl]=useState('')
    
    useEffect(()=>{
        getClientPara()
    },[])
    
    const getClientPara=async()=>{
        const para=await fetch(`${BASE_API_URL}/para`)
        const res=await para.json()
        setPara(res)
        let submit_url=`${BASE_API_URL}/submit`
        setSubmitUrl(submit_url)
    }
    
    if(!para) return(
        <div style={styles.app__loader}>
            <CircularProgress 
                color="secondary"
            />
        </div>
    )
  return (
    <div style={styles.app}>{
        para &&
        <Grid container spacing={3}>
            <Grid item sm={2} md={3} lg={4}/>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Card style={styles.app__card}>
                    <CardContent>
                        <Typography variant="h5">
                            Event Registration Form
                        </Typography>
                        <Typography variant="body2">
                            {para[0].description}
                        </Typography>
                        <form action={submitUrl} method="POST" style={styles.app__form}>
                            <TextField
                                name="name"
                                type="text"
                                onChange={(e)=>updateName(e.target.value)}
                                label="Name *"
                                variant="outlined"
                                style={styles.app__input}
                            />
                            <TextField
                                name="username"
                                type="text"
                                onChange={(e)=>updateUsername(e.target.value)}
                                label="Instagram Handle *"
                                variant="outlined"
                                style={styles.app__input}
                            />
                            <TextField
                                name="email"
                                type="email"
                                onChange={(e)=>updateEmail(e.target.value)}
                                label="Email Id *"
                                variant="outlined"
                                style={styles.app__input}
                            />
                            <TextField
                                name="phone"
                                onChange={(e)=>updatePhone(e.target.value)}
                                label="Contact No * (with country code)"
                                placeholder="+12 1234567890"
                                variant="outlined"
                                style={styles.app__input}
                            />
                            <Button 
                                variant="contained" 
                                disabled={!name || !username || !email || !phone} 
                                type="submit"
                                style={styles.app__btn}
                                color="secondary"
                            >
                                Submit
                            </Button>
                            <Typography variant="caption">* Required Fields</Typography>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={2} md={3} lg={4}/>
        </Grid>
    }
    </div>
  );
}


export default App;
