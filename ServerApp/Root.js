import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import App from './components/App'
import ShowData from './components/ShowData'
import Para from './components/Para'

const Drawer=createDrawerNavigator()

const Root = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName={App}
            >
                <Drawer.Screen 
                    name="Home" 
                    component={App}
                />
                <Drawer.Screen 
                    name="Registered" 
                    component={ShowData}
                />
                <Drawer.Screen 
                    name="Intro Paragraph" 
                    component={Para}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Root