
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import{createAppContainer,createSwitchNavigator}from'react-navigation';
import Choose from '../screens/choose';
import Create from'../screens/CreateTT'
import Login from '../screens/Login';

 const Switch = () => {
  
    return (
      <View>
        <Text>Switch</Text>
        <AppContainer/>
      </View>
    )
  
}
var AppNavigator=createSwitchNavigator({

  Choose:Choose,
  CreateTT:Create,
    
   
  })
const AppContainer = createAppContainer(AppNavigator)
export default Switch