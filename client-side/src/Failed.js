import React from 'react'
import {Link} from 'react-router-dom'
import {Grid,Card,CardContent,Typography,Button} from '@material-ui/core';
import {styles} from './AppStyles.js';

function Failed() {
    return (
        <div style={styles.app}>
            <Grid container spacing={3}>
                <Grid item sm={2} md={3} lg={4}/>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card style={styles.app__card}>
                        <CardContent style={styles.app__cardContent}>
                            <Typography variant="h6" style={styles.app__text}>Registration failed. Try again.</Typography>
                            <Link to="/">
                                <Button color="secondary" variant="contained">
                                    Go back
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={2} md={3} lg={4}/>
            </Grid>
        </div>
    )
}

export default Failed
