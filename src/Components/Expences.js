import { StyleSheet, Text, View, Image, TurboModuleRegistry } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { colors } from '../global/style';
import { AntDesign } from '@expo/vector-icons';



// const car = [
//     {
//         id:1,
//         image:'../../assets/myfin1.png',
//     },
//     {
//         id:2,
//         image:'../../assets/myfin1.png',
//     },
//     {
//         id:3,
//         image:'../../assets/myfin1.png', 
//     },
//     {
//         id:4,
//         image:'../../assets/myfin1.png',
//     },
    
// ]

const Expences = () => {

  return (
    <View style={styles.container}>
      {/* <View style={styles.haedbox}> */}
        <Text style={styles.headtxt} >Expences</Text>
      {/* </View> */}
      <View style={styles.expencesbox}>
        <Swiper 
          autoplay={true} 
          autoplayTimeout={5} 
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<AntDesign name="stepforward" size={24} color="black" style={styles.slidebtn}/>}
          prevButton={<AntDesign name="stepbackward" size={24} color="black" style={styles.slidebtn}/>}
        >
          <View style={styles.slide}>
            <Image source={require('../../assets/myfin1.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/myfin.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../../assets/favicon.png')} style={styles.image} />
          </View>
          
        </Swiper>
      </View>
      
    </View>
  )
}

export default Expences

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    textAlign:'center',
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
  expencesbox:{
    width:'100%',
    height:200,
    backgroundColor:colors.col1,
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10,
  },
  sllidee:{
    width:'100%',
    height:200,
    backgroundColor:colors.text4,
    justifyContent:'center',
    alignItems:'center',

  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:20,
  },
  slidebtn:{
    color:colors.text4,
    fontSize:25,
    fontWeight:'400',
    backgroundColor:'white',
    borderRadius:20,
    width:40.,
    height:40,
    alignItems:'center',
    textAlign:'center',
    lineHeight:40,
  }
})