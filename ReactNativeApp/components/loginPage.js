import { StatusBar } from 'expo-status-bar';
import { useState  } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, } from 'react-native';
import { useLayoutEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
const navigateTo = (page) =>{
      navigation.navigate(page)
    }
useLayoutEffect(()=>{
  navigation.setOptions({
    headerStyle: {backgroundColor: 'rgba(0,0,0,1)' },
    headerTintColor: 'white',
    title: "Login into the App",
  })
}, [])

  const navigateLogin = () =>{
    navigation.navigate('imagePicker')
}
    const submit = () =>{
      alert("email:" + email + '  password:' + password)
     
    }
    const forgotPassword = () =>{
      const location = navigator.geolocation;
      console.log(location)
    }

    return (
        <View style={styles.container}>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.2)']}
        style={styles.background}
      />
        <View style={styles.container}>
          
    <Image
            style={styles.image}
            source={require('../assets/pngegg.png')}
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
    <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.button}>
    <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        //submit()
        navigateLogin()
      }}
    >
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    </LinearGradient>
        </View>
        </View> );
}
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4c669f',
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    height:50,
    width:"80%",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:{
   flex: 1,
   justifyContent: 'center',
   alignItems:'center',
   width: '100%',
   height: '100%'
 },
 image: {
  marginBottom: 40,
  height: 250,
  width:250,
  resizeMode: 'stretch',
},
background: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
},
});



