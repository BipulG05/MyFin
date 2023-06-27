import React, { useState } from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity, TextInput } from 'react-native';
import {colors,titles,btn2,hr80} from '../../global/style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Login = ({navigation}) => {
    const [emailFocus,setEmailFocus] = useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);
    const [showPassword,setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={styles.head}>Login Here</Text>
        <View style={hr80}/>
        <View style={styles.inputout}>
            <AntDesign name="user" size={24} color={emailFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input} placeholder='Email or User name'
            onFocus={()=>{
                setEmailFocus(true);
                setPasswordFocus(false);
                setShowPassword(false);

            }}
            />
        </View>
        <View style={styles.inputout}>
            <MaterialIcons name="lock-outline" size={24} color={passwordFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={showPassword===false?true:false}
            onFocus={()=>{
                setEmailFocus(false);
                setPasswordFocus(true);
            }}
            />
            <Octicons name={showPassword === false ? 'eye-closed':'eye'} size={24} color={showPassword===true?colors.text1:colors.text2}
            onPress={() => 
                setShowPassword(!showPassword)
            }/>
        </View>
        <TouchableOpacity style={btn2}>
            <Text style={styles.logBtntxt} onPress={()=>navigation.navigate('home')} >Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftxt}>Login With</Text>
        <View style={styles.gf}>
            <TouchableOpacity>
                <View style={styles.gficon}>
                    <AntDesign name="google" size={24} color="red" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.gficon}>
                    <FontAwesome5 name="facebook" size={24} color="blue" />
                </View>
            </TouchableOpacity>
        </View>
        <View style={hr80}/>
        <Text>Don't have an account ? 
            <Text style={styles.signuptxt} onPress={()=>navigation.navigate('signup')}> Sign Up</Text>
        </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    head:{
        fontSize:titles.title1,
        color:colors.text3,
        textAlign:'center',
        marginVertical:10,
    },
    inputout:{
        flexDirection:'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:colors.col1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        // alignSelf:'center',
        elevation:20,
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:'80%',
    },
    
    logBtntxt:{
        color:colors.col1,
        fontSize:titles.btntxt,
        fontWeight:'bold',
        textAlign:'center',
        elevation:10,
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10,
    },
    or:{
        color:colors.text3,
        marginVertical:10,
        fontWeight:'bold',
    },
    gftxt:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25,

    },
    gf:{
        flexDirection:'row',
    },
    gficon:{
        backgroundColor:'white',
        width:50,
        height:50,
        margin:10,
        borderRadius:10,
        pagging:10,
        alignItems:'center',
        justifyContent:'center',
        elevation:20,
    },
    signuptxt:{
        color:colors.text1,
    }
})

export default Login