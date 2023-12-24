import React from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity, Text, } from 'react-native';

const FullScreenImage = ({ route, navigation }) => {
  const { image } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={image}
        style={{ width: '100%', height: '88%' }}
        resizeMode="contain"
      />
      <TouchableOpacity
          style={styles.gobackbtn}
          onPress={() => navigation.navigate('SavedDesign')}
        >
          <Text  style={styles.gobackText} >Go Back </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.tryonbtn}
        onPress={() => navigation.navigate('TryOn', { image: image })}
      >
        <Text style={styles.tryonText}
        
        >Try On</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FullScreenImage;


const styles = StyleSheet.create({  
  gobackbtn:{
    width: 80,
    height: 40,
    backgroundColor: '#841584',
    borderRadius: 15,
    alignItems:'center'
  },
  gobackText:{
    margin:10,
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  },
  tryonbtn:{
    width: 80,
    height: 40,
    backgroundColor: '#841584',
    borderRadius: 15,
    alignItems:'center',
    margin:10
  },
  tryonText:{
    margin:10,
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }

});
