import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const ShopScreen = () => {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <View>
      <Text>Uniform Details</Text>
      <Text>Size:</Text>
      <Picker
        selectedValue={selectedSize}
        onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
      >
        <Picker.Item label="Small" value="S" />
        <Picker.Item label="Medium" value="M" />
        <Picker.Item label="Large" value="L" />
        <Picker.Item label="Extra Large" value="XL" />
      </Picker>
      <Text>Price: $50</Text>
      <Button title="Add to Cart" onPress={() => console.log('Add to Cart')} />
      <Button title="Shop Now" onPress={() => console.log('Shop Now')} />
    </View>
  );
};

export default ShopScreen;
