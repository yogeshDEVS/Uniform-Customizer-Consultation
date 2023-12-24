import React from  'react';
import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import Header from './Header';
import Product from  './Product';

const Main = () => {
  const products=[
    {
        name: 'Camel Shirt Uniform',
        color: 'white',
        price: 30000,
        image: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        name: 'Jampers Uniform',
        color: 'white',
        price: 30000,
        image: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        name: 'RedFrame Uniform',
        color: 'white',
        price: 30000,
        image: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ]

  return (
    <ScrollView >
    <View  >
    <Header />
  
    {
        products.map((item) =>  <Product item={item} /> )
    }

  
   
   </View>
      </ScrollView>
  );
};

export default Main;