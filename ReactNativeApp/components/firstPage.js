
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';



const FirstPage = ({navigation}) => {

    const navigateTo = (page) =>{
        navigation.navigate(page)
    }

    return (
    
        <View style={styles.container}>
    <Image
            style={styles.image}
            source={require('../assets/pngegg.png')}
          />
          <TouchableOpacity style={styles.loginBtn}
      onPress={()=>{
        // submit()
        navigateTo('secondPage')
      }}
    >
      <Text >Next</Text>
    </TouchableOpacity>
        </View>
      );
}
export default FirstPage ;
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
});
