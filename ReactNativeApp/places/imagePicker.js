import React, { useState, useEffect } from 'react';
import { Button, Image, View, Alert, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus} from 'expo-image-picker';
import { useLayoutEffect } from 'react';
import { getLocation } from '../functions/getLocation';
import GasPicker from '../components/gasPicker';
import WatterPicker from '../components/waterPicker';

function ImagePickerExample({navigation}, props ) {
  const [imageWatter, setImageWatter] = useState(props.image);
  const [imageGass, setImageGass] = useState(props.image);
  const [location, setLocation] = useState(getLocation());
  const [watteer, setWatter] = useState(0)
  const [gass, setGass] = useState(0)
 const [cameraPermisionInformation, requestPermision] = useCameraPermissions();

 const navigateTo = (page) =>{
  navigation.navigate(page)
}
useLayoutEffect(()=>{
navigation.setOptions({
  title: "take image",
      headerRight: () => {
        return <Button title='Next' onPress={()=>{navigateTo('location') }} />
      }
})
}, [])
  async function veryfyPermisions () {
        if(cameraPermisionInformation.status === PermissionStatus.UNDETERMINED){
           const permitionResponse = await requestPermision();
           return permitionResponse.granted;
        }
        if(cameraPermisionInformation.status === PermissionStatus.DENIED){
            Alert.alert('You need camera permision')
            return false
        }
        return true;
  }

  const pickImage = async (kind) => {
    const hasPermision =  await veryfyPermisions();
    if(!hasPermision){
      return
    }
    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [17, 10],
      quality: 1,
    });
    const location = await getLocation();
    if (!result.cancelled) {
    if(kind == "GAS"){
      setImageGass(result.uri);
      setLocation(location)
    }else{
      setImageWatter(result.uri);
      setLocation(location)
    }
  }};

  useEffect(()=>{
    
},[])
const deleteString = (value) =>{
  value = value.split('')
  let neWvalue = []
for(let i = 0; i< value.length; i++){
   if(!isNaN(value[i])){
    neWvalue.push(value[i])
   }
}
return neWvalue.join("")
}
  return (
    <View style={styles.container}>
      <GasPicker deleteString={deleteString} pickImage ={pickImage}
       imageGass ={imageGass} 
      location={location} gass={gass} setGass={setGass} deleteString={deleteString}  />
      
      <WatterPicker deleteString={deleteString} pickImage ={pickImage}
       image ={imageWatter} 
      location={location} product={watteer} setValue={setWatter} deleteString={deleteString}  />
      
      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        // submit()
        navigateTo('location')
      }}>
      <Text>Next</Text>
    </TouchableOpacity>
    </View>
  );
}
export default  ImagePickerExample;

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      backgroundColor: 'yellow',
      height: '100%'
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
      backgroundColor: 'blue'
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