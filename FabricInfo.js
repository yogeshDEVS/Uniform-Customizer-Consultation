import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const FabricInfo = () => {
  const fabrics = [
    { id: 1, name: 'Cotton', description: 'Cotton fibers are natural hollow fibers; they are soft, cool, known as breathable fibers and absorbent. Cotton fibers can hold water 24–27 times their own weight. They are strong, dye absorbent and can stand up against abrasion wear and high temperature. In one word, cotton is comfortable. Since cotton wrinkles, mixing it with polyester or applying some permanent finish gives the proper properties to cotton garments. Cotton fibers are often blended with other fibers such as nylon, linen, wool, and polyester, to achieve the best properties of each fiber.', image: require('./assets/cotton.jpeg') },
    { id: 2, name: 'Polyester', description: 'Polyester is a synthetic fabric that’s usually derived from petroleum. This fabric is one of the world’s most popular textiles, and it is used in thousands of different consumer and industrial applications. Chemically, polyester is a polymer primarily composed of compounds within the ester functional group. Most synthetic and some plant-based polyester fibers are made from ethylene, which is a constituent of petroleum that can also be derived from other sources.', image: require('./assets/polyester.jpeg') },
    { id: 3, name: 'Blend', description: 'Blends are often made by intermingling two or more types of staple fibers to produce one yarn. In other words, more than one fiber is twisted together to make a yarn. These fibers can be of different types, depending on the effect/advantages you are aiming for performance, cost or aesthetics.  ', image: require('./assets/blend.jpeg') },
    
  ];

  return (
    <ScrollView> 
    <View style={styles.container}>
      {fabrics.map((fabric) => (
        <View key={fabric.id} style={styles.card}>
          <Image source={fabric.image} style={styles.image} />
          <Text style={styles.text}>{fabric.name}</Text>
          <Text style={styles.description}>{fabric.description}</Text>
        </View>
      ))}
    </View>
    </ScrollView>
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
    height: 100, 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default FabricInfo;