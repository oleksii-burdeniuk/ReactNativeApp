import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import * as Location from 'expo-location';
import { getMapPreview } from '../util/location';

export default function LocationComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [count, setCount] =  useState(0);
  const [pickedLocation, setPickedLocation] = useState();
  const reload = ( ) => {
    setCount(count + 1)
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPickedLocation({
          lat : location.coords.latitude,
          long : location.coords.longitude
      })
    })();
  }, [count]);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude
    let altitude = location.coords.altitude
    let accuracy = location.coords.accuracy
    let speed = location.coords.speed
    let altitudeAccuracy = location.coords.altitudeAccuracy
    let timestamp = new Date(location.timestamp);
    text = `
    latitude: ${latitude} 
    longitude: ${longitude} 
    altitude: ${altitude} 
    accuracy: ${accuracy} 
    speed: ${speed} 
    altitudeAccuracy: ${altitudeAccuracy} 
    timestamp: ${timestamp} 
    `
  }
  let locationPreview = <Text> No location picked yet </Text>

if(pickedLocation){
  locationPreview =(
  <Image style={styles.img} source={{uri: getMapPreview(pickedLocation.lat,pickedLocation.long) }}/>
  )
}

  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            {locationPreview}
        </View>
      <Text style={styles.paragraph}> { text}</Text>
      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        // submit()
        reload()
      }}
    >
      <Text >Refresh</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph:{

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
      imgContainer:{
          width: '100%',
          height: 300,
      },
      img:{
        width:'100%',
        height:'100%',
      }
 }); 