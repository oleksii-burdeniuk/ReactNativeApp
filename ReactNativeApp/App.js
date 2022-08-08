import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet,} from 'react-native';
import LoginPage from './components/loginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagePickerExample from './places/imagePicker';
import LocationComponent from './places/locationPicker';
import * as NavigationBar from 'expo-navigation-bar';
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={true}
      />
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerStyle: {backgroundColor: "yellow"},
          headerTintColor: 'grey',
          contentStyle:{
            backgroundColor: 'yellow'
          }
        }}>
        <Stack.Screen name='Login' >
        {(props) => <LoginPage {...props} />}
        </Stack.Screen>

        <Stack.Screen name='location'  options={{
          title: "get your location",
        }}>
        {(props) => <LocationComponent {...props} />}
        </Stack.Screen>

        <Stack.Screen name='imagePicker'>
        {(props) => <ImagePickerExample {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
});