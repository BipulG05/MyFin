import React, { useState } from 'react';
import {StyleSheet,Image, View,Text, TouchableOpacity, TextInput } from 'react-native';
import {colors,titles,btn2,hr80} from '../../global/style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Signup = ({navigation}) => {
    const [nameFocus,setNameFocus] = useState(false);
    const [emailFocus,setEmailFocus] = useState(false);
    const [phoneFocus,setPhoneFocus] = useState(false);
    const [passwordFocus,setPasswordFocus] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [CpasswordFocus,setCPasswordFocus] = useState(false);
    const [showCPassword,setShowCPassword] = useState(false);


  return (
    <View style={styles.container}>
        <Text style={styles.head}>Signup Here</Text>
        <View style={hr80}/>
        {/* Name start */}
        <View style={styles.inputout}>
            <AntDesign name="user" size={24} color={nameFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input} placeholder='Name'
            onFocus={()=>{
                setNameFocus(true);
                setEmailFocus(false);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setShowPassword(false);
                setCPasswordFocus(false);
            }}
            />
        </View>
        {/* Name End */}
        {/* Email start */}
        <View style={styles.inputout}>
            <MaterialCommunityIcons name="email-outline" size={24} color={emailFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input} placeholder='Email'
            onFocus={()=>{
                setEmailFocus(true);
                setPhoneFocus(false);
                setPasswordFocus(false);
                setShowPassword(false);
                setCPasswordFocus(false);
                setNameFocus(false);
            }}
            />
        </View>
        {/* Email End */}

        {/* Phone No start */}
        <View style={styles.inputout}>
            <Feather name="phone" size={24} color={phoneFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input}  maxLength={10} placeholder='Phone No'
            onFocus={()=>{
                setPhoneFocus(true);
                setPasswordFocus(false);
                setShowPassword(false);
                setCPasswordFocus(false);
                setEmailFocus(false);
                setNameFocus(false);
            }}
            />
        </View>
        {/* Phone No End */}

        {/* password start */}
        <View style={styles.inputout}>
            <MaterialIcons name="lock-outline" size={24} color={passwordFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input}   placeholder='Password' secureTextEntry={showPassword===false?true:false}
            onFocus={()=>{
                setEmailFocus(false);
                setPasswordFocus(true);
                setCPasswordFocus(false);
                setPhoneFocus(false);
                setNameFocus(false);
            }}
            />
            <Octicons name={showPassword === false ? 'eye-closed':'eye'} size={24} color={showPassword===true?colors.text1:colors.text2}
            onPress={() => 
                setShowPassword(!showPassword)
            }/>
        </View>
        {/* password end */}

        {/* confirm password start */}
        <View style={styles.inputout}>
            <MaterialIcons name="lock-outline" size={24} color={CpasswordFocus===true?colors.text1:colors.text2} />
            <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry={showCPassword===false?true:false}
            onFocus={()=>{
                setEmailFocus(false);
                setCPasswordFocus(true);
                setPasswordFocus(false);
                setPhoneFocus(false);
                setNameFocus(false);
            }}
            />
            <Octicons name={showCPassword === false ? 'eye-closed':'eye'} size={24} color={showCPassword===true?colors.text1:colors.text2}
            onPress={() => 
                setShowCPassword(!showCPassword)
            }/>
        </View>
        {/* confirm password end */}
        

        <TouchableOpacity style={btn2}>
            <Text style={styles.logBtntxt} >Signup </Text>
        </TouchableOpacity>
        <Text style={styles.gftxt}>Sign up With</Text>
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
        <Text>Already have an account ? 
            <Text style={styles.signuptxt} onPress={()=>navigation.navigate('login')}> Login</Text>
        </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        // justifyContent:'center',
        marginTop:30,
    },
    head:{
        fontSize:titles.title1,
        color:colors.text3,
        textAlign:'center',
        marginTop:10,
    },
    inputout:{
        flexDirection:'row',
        width:'85%',
        marginVertical:5,
        backgroundColor:colors.col1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        // alignSelf:'center',
        elevation:20,
    },
    input:{
        fontSize:16,
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


export default Signup