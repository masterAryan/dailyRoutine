import { Text, View,ImageBackground,TouchableOpacity,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import {Header} from 'react-native-elements'

 class Choose extends Component {
  render() {
    return (
      <ImageBackground source = {require('../assets/CreateBG.webp')} style = {{height : RFValue(372)}}>

      <View>
      <Header
          backgroundColor={'violet'}
          centerComponent={{
            text: 'Daily Routine',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
      <TouchableOpacity
              style={styles.button}
              
            >
              
              <Text style={styles.googleText}>Create New Time Table</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.guestButton}
              
            >
               
              <Text style={styles.googleText}>Use Old Time Table</Text>
            </TouchableOpacity>
       
      </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf : 'center',
    bottom : RFValue(-90),
   
  },
  guestButton: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    alignSelf : 'center',
    bottom : RFValue(-150),
   
  },
  googleIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain",
    justifyContent : "space-evenly"
  },
  googleText: {
    color: "black",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans"
  },
  guest: {
    width: RFValue(50),
    height: RFValue(50),
    left : RFValue(-10),
    resizeMode: "contain"
  },
})

export default Choose