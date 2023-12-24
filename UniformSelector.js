import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from './components/Header';

const UniformSelector = ({ navigation }) => {
  return (
    <> 
    <Header />
    <View style={styles.container}>
      <Text style={styles.logo}>Uniform Factory</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Customize Shirt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PantDetails')}>
        <Text style={styles.buttonText}>Customize Pant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SkirtDetails')}>
        <Text style={styles.buttonText}>Customize Skirt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SavedDesign')}>
        <Text style={styles.buttonText}>Saved Design</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SampleScreen')}>
        <Text style={styles.buttonText}>Swatch Samples</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Shopping Corner</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Splash')}>
        <Text style={styles.buttonText}>Virtual Consultation</Text>
      </TouchableOpacity>
     
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#841584',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default UniformSelector;
