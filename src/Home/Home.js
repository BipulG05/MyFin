import { StyleSheet, View, Text, StatusBar, TextInput } from 'react-native';
import React from 'react';
import Navbar from '../Components/Navbar';
import Statistic from '../Components/Statistic';
import Expences from '../Components/Expences';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/style';

const Home = () => {
  return (
    <View style={styles.container}>
        <StatusBar/> 
        <Navbar/>
        <View style={styles.searchbox}>
            <AntDesign style={styles.searchicon} name="search1" size={24} color="black" />
            <TextInput placeholder='Search' style={styles.searchinput} />
        </View>
        <Statistic/>
        <Expences/>
        <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.col1,
        alignItems:'center',
        width:'100%',
    },
    searchbox:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:colors.col1,
        borderRadius:30,
        alignItems:'center',
        padding:10,
        margin:20,
        elevation:10,
    },
    searchinput:{
        marginLeft:10,
        width:'90%',
        fontSize:18,
        color:colors.text4,
    },
    searchicon:{
        color:colors.text2,
    }
    
})


export default Home