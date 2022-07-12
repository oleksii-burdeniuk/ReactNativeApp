import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';






export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submit = () =>{
    alert("email:" + email + '  password:' + password)
   
  }
  const forgotPassword = () =>{
    const location = navigator.geolocation;
    console.log(location)
  }

  
  return (
    
    <View style={styles.container}>
<Image
        style={styles.image}
        source={require('./assets/logo.png')}
      />
      <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<TouchableOpacity>
  <Text style={styles.forgot_button}
  onPress={()=>{forgotPassword()}}
  >Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.loginBtn}
  onPress={()=>{submit()}}
>
  <Text style={styles.loginText}>LOGIN</Text>
</TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    height: '100%'
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:{
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:40,
   backgroundColor:"#FF1493",
 },
 image: {
  marginBottom: 40,
  width: 140,
  height: 160,
  resizeMode: 'stretch',
},
});
