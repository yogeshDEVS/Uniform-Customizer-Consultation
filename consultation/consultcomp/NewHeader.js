import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NewHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.header} >
      <TouchableOpacity style={styles.backbtn} onPress={() => navigation.navigate('UniformSelector')} >
        <Image source={require('../images/left-arrow.png')} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}> {title} </Text>
    </View>
  )
}

export default NewHeader;

const styles = StyleSheet.create({
    header: {
        height:60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
    },
   back: {
    width: 20,
    height:25,
    marginTop:30,
    marginLeft: 10
    
   },
   backbtn: {
    width:30,
    height: 30,
    borderRadius: 10,
   },
   title:{
    marginLeft:  45,
    fontSize: 17,
    fontWeight: 'bold',
    
   }
    
})