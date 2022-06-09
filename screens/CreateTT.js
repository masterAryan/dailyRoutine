import React, { useState } from "react";
import { View, Picker, StyleSheet,TextInput,ImageBackground,Text } from "react-native";
import {Header, withTheme} from 'react-native-elements'
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase'
export default class Create extends React.Component{
  
    constructor(props){
      super(props);
      this.state = { text: '' };
      }
  
  
  render(){
  return (
      <ImageBackground source = {require('../assets/bgcreate.webp')} style = {{height:RFValue(380)}}>
      <View>
           <Header
          backgroundColor={'#DA2828'}
          centerComponent={{
            text: 'Daily Routine',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
        
    <View style={styles.container}>
         
    
        
      
      </View>
     
      <View style = {styles.Input}>
      <TextInput
      style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}
      onChangeText={(text) => this.setState({text})}
      placeholder="enter the start time" 

      ></TextInput>
      <Text>{this.state.text}</Text>
    
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:180,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>

      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:180,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:180,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:180,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>

    
      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:180,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:-600}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:700,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:700,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:700,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:700,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput>


      <TextInput placeholder="enter the start time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>
      <TextInput placeholder="enter the end time" style = {{width : 150,height:50,borderWidth:2,borderColor:'white',marginLeft:500,marginTop:10}}></TextInput>

      <TextInput placeholder="what do yo want to do" style = {{width : 180,height:100,marginLeft:700,marginTop:-100,borderWidth:2,borderColor:'white'}}></TextInput></View>
      
    </View>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center"
  },
 
  

    


});

