
import * as Location from 'expo-location';

export const getLocation = async() => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
     return ('Permission to access location was denied');
    }
   const  location = await Location.getCurrentPositionAsync({})
    return {
         latitude : location.coords.latitude,
         longitude : location.coords.longitude,
         altitude : location.coords.altitude,
         accuracy : location.coords.accuracy,
         speed : location.coords.speed,
         altitudeAccuracy : location.coords.altitudeAccuracy,
         timestamp : new Date(location.timestamp),
    }
  }
