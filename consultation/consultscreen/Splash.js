import { View, Text, StyleSheet, Image} from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('HomeScreen')
        }, 2000 );
     },[] );
  return (
    <View style={styles.container} >
      <Text style={styles.title} > Uniform Factory Virtual Consultation</Text>
      <Image source={require('../images/shirt.png') } style={styles.logo} />
    </View>
  );
};

export default Splash;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#841584',
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginTop: 0, 
        color: '#fff'
    }

});