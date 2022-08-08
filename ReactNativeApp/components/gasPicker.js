import React, { useState, useEffect } from 'react';
import { Button, Image, View, Alert, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

const GasPicker = ({deleteString, imageGass, location, gass, setGass, pickImage }, ...props)=> {
    return (
<View style={styles.container}>
    <View style={styles.watterContainer}>
        <View style={styles.imgContainer}>
          {imageGass && <Image source={{ uri: imageGass }} style={styles.img}/> }
        </View>
      <View>
      {location && <Text style={styles.text} >latitude : {location.latitude} </Text>}
      {location && <Text style={styles.text}>longitude : {location.longitude} </Text>}
      <View style={styles.inputView}>
      <TextInput
         keyboardType = 'numeric'
        style={styles.TextInput}
        value={gass}
        placeholder="Gas readings"
        placeholderTextColor="#003f5c"
        onChangeText={(value) =>{ 
          let num = + value ? value : deleteString(value)
          setGass(num) 
          }}
      />
      <TouchableOpacity style={styles.takePhotoBtn} onPress={()=> pickImage('GAS') }>
       <Text>  Take image</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View> 
    </View>
  );
}
export default  GasPicker;
const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      backgroundColor: 'yellow',
    },
    image: {
    marginBottom: 40,
    height: 250,
    width:250,
    resizeMode: 'stretch',
  },
  loginBtn:{
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#FF8493",
    },
    watterContainer:{
      width: '100%',
      minHeight: 100,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'grey'
    },
    imgContainer: {
      flex:1,

    },
    img:{
      width: 160,
      height: 100,
      padding: 5,
      borderRadius: 5,
    },
    text:{
      marginRight:20,
      margin: 5,
      backgroundColor: 'white',
    },
    TextInput: {
      width: 100,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginTop: 5,
      borderRadius: 3,
    },
    inputView:{
      flexDirection: 'row'
    },
    takePhotoBtn: {
      width: 100,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginTop: 5,
      borderRadius: 3,
      backgroundColor: 'green'
    }

  });