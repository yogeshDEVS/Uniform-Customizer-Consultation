import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Example icon library
import { useNavigation } from '@react-navigation/native'; // If you're using React Navigation

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.cartButton}>
      <Icon name="shopping-cart" size={30} color="#000" />
      <View style={styles.cartCountContainer}>
        <Text style={styles.cartCountText}>{cartItems}</Text>
      </View>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'flex-end', // Align cart button to the right
    alignItems: 'center', // Vertically center
    padding: 10,
    
  },
  cartButton: {
    position: 'relative', // Relative positioning for the cart button
  },
  cartCountContainer: {
    position: 'absolute', // Absolute positioning for the count
    top: -12, // Position above the cart icon
    right: -10, // Position to the right of the cart icon
    backgroundColor: 'yellow',
    borderRadius: 10, // Circular shape
    height: 23,
    width: 20,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  cartCountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
