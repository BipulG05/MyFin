import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../global/style';
import { Foundation } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Statistic = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headtxt} >Statistic</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.statbox}>
            <Foundation name="graph-trend" size={30} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>
        <View style={styles.statbox}>
            <Foundation name="graph-pie" size={24} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>
        <View style={styles.statbox}>
            <Entypo name="bar-graph" size={24} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>
        <View style={styles.statbox}>
            <Entypo name="area-graph" size={24} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>
        <View style={styles.statbox}>
            <MaterialCommunityIcons name="chart-scatter-plot" size={24} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>
        <View style={styles.statbox}>
            <Foundation name="graph-trend" size={30} color="black" style={styles.statlicon}/>
            <Text style={styles.statltxt}>Line Plot</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default Statistic

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.col1,
        width:'90%',
        elevation:10,
        borderRadius:10,
    },
    headtxt:{
        color:colors.text2,
        fontSize:25,
        fontWeight:'300',
        margin:10,
        alignSelf:'center',
        paddingBottom:5,
        borderBlockColor:colors.text2,
        borderBottomWidth:1,
    },
    statbox:{
        backgroundColor:colors.col1,
        elevation:20,
        margin:10,
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    statlicon:{
        marginRight:10,
        color:colors.text4,
    }
})