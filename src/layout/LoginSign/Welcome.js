import React from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity } from 'react-native';
import logo from '../../../assets/myfin1.jpg';
import {colors,hr80} from '../../global/style'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Your Money</Text>
        <Text style={styles.subtitle} >Can you control your expenses ?</Text>
        <View style={styles.logoWelcome}>
          <Image style={styles.logo} source={logo}/>
        </View>
        <View style={hr80}/>
        <Text style={styles.Welcometxt}> Here You can </Text>
        <View style={hr80} />
        <View style={styles.btnWelcome}>
          <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
            <Text style={styles.btn}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <Text style={styles.btn}>Login</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ff4242',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',

  },
  title:{
    fontSize:55,
    color:colors.col1,
    textAlign:'center',
    marginVertical:5,
    fontWeight:'800',
  },
  subtitle:{
    fontSize:19,
    color:colors.col1,
    textAlign:'center',
    marginVertical:10,
    fontWeight:'100',
    backgroundColor:' rgba(0, 0, 0, 0.159)',
    padding:10,
  },
  Welcometxt:{
    fontSize:20,
    // fontFamily:'Times New Roman',
    color:colors.col1,
    textAlign:'center',
    marginVertical:5,
    fontWeight:'400',
  },
  logoWelcome:{
    width:'80%',
    height:'30%',
    alignItems:'center',
    // backgroundColor:'#fff',
  },
  logo:{
    width:'100%',
    height:'100%',

  },
  btnWelcome:{
    flexDirection:'row',
    
  },
  btn:{
    fontSize:20,
    color:colors.text1,
    textAlign:'center',
    marginVertical:30,
    marginHorizontal:10,
    fontWeight:'700',
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    paddingHorizontal:20,
  }

})

export default Welcome