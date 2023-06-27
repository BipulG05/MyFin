import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../global/style';


const Navbar = () => {
  return (
    <View style={styles.container}>
        <EvilIcons name="navicon" size={30} color="black" style={styles.navicon} />
        <View style={styles.block}>
            <Text style={styles.headtxt}>Your Expences </Text>
            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={24} color="black" style={styles.listicon} />
        </View>
        <Ionicons name="md-person-circle-outline" size={30} color="black" style={styles.personicon} />

    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:colors.col1,
        elevation:10,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    block:{
        flexDirection:'row',
        alignItems:'center',
    },
    headtxt:{
        fontSize:20,
    }

})