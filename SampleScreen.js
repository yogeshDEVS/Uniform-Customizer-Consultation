import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from './components/redux/action'; // Import the action
import { useNavigation } from '@react-navigation/native';
import Header from  './components/Header' ;

const SampleScreen = () => {
  const dispatch = useDispatch(); // Use useDispatch hook
  const navigation = useNavigation();

  const swatchSamples = [
    { id: 1, name: 'Swatch 1', price: '$10', image: require('./assets/sample1.png') },
    { id: 2, name: 'Swatch 2', price: '$20', image: require('./assets/sample1.png') },
    { id: 3, name: 'Swatch 3', price: '$20', image: require('./assets/sample1.png') }
    // Add more swatch samples as needed
  ];

  const handleAddToCart = (sample) => {
    // Create an item object with the details you want to add to the cart
    const item = {
      name: sample.name,
      price: sample.price.replace('$', ''), // Remove the dollar sign to store just the number
      image: sample.image, // Assuming this is a local image, you might want to store the URI instead
    };

    // Dispatch the addToCart action with the item object
    dispatch(addToCart(item));
    console.log(`Added ${sample.name} to cart`);
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.infobutton} onPress={() => navigation.navigate('FabricInfo')}>
            <Text style={styles.buttonText}>Material Information</Text>
          </TouchableOpacity>
          {swatchSamples.map((sample) => (
            <View key={sample.id} style={styles.card}>
              <Image source={sample.image} style={styles.image} />
              <View style={styles.row}>
                <Text style={styles.text}>{sample.name}</Text>
                <Text style={styles.text}>{sample.price}</Text>
              </View>
              <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(sample)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 100, 
    height: 170, 
  },
  button: {
    backgroundColor: '#841584',
        borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    
  },
  infobutton: {
    backgroundColor: '#841584',
    borderRadius: 25,
padding: 10,
alignItems: 'center',
marginTop: 10,
marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default SampleScreen;
