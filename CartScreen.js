import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './components/redux/action';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Example icon library
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const CartScreen = () => {
  const cartItems = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Use the useNavigation hook

    // Calculate the subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);


  const handleRemoveFromCart = (itemName) => {
    dispatch(removeFromCart(itemName));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
       <Image
      source={typeof item.image === 'string' && item.image.startsWith('http') ? { uri: item.image } : item.image}
      style={styles.itemImage}
    />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
        <Text style={styles.itemSize}>{item.size}</Text>
        <Text style={styles.itemMaterial}>{item.material}</Text>
        {/* <Text style={styles.itemColor}>{item.color}</Text> */}

        {/* Add more details like size and color here */}
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveFromCart(item.name)}>
        <Icon name="remove-shopping-cart" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.subtotalText}>Subtotal: ${subtotal.toFixed(2)}</Text>
 
      <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('PaymentScreen')}>
        <Text style={styles.proceedButtonText}>Proceed to Buy</Text>
      </TouchableOpacity>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.name.split(' ').pop()} // Extracts the unique ID appended to the name
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemSize:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemMaterial:{
    fontSize: 16,
    color: '#000'
  },
  itemColor:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  removeButton: {
    padding: 8,
    marginLeft: 10,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  proceedButton: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  proceedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  // Add styles for size and color details
});

export default CartScreen;
