import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import {useDispatch, useSelector } from 'react-redux';
import { deleteFromSavedDesigns} from './components/redux/action';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


const SavedDesign = () => {
  const navigation = useNavigation();
  const savedDesigns = useSelector((state) => state.savedDesigns);
  const dispatch = useDispatch();
  
 

  const renderItem = ({ item }) => {
    // Check if the item is undefined before rendering
    if (!item || !item.name || !item.image) {
      return null;
    }

    return (  <ScrollView>
      <View style={styles.itemContainer}>
        <Image
          source={item.image}
          style={styles.itemImage}
        />
         <View style={styles.textContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('FullScreenImage', { image: item.image })}
        >
          <Text  style={styles.viewText} >View</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => dispatch(deleteFromSavedDesigns(item))}
          >
            <Icon name="delete" type="material" color="#000" />
          </TouchableOpacity>

      </View>
      </ScrollView>
    );
  };

  return (
    <FlatList
      data={savedDesigns}
      keyExtractor={(item, index) => item.name + index} // Ensure unique keys
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 120,
    height: 140,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewButton:{
    width: 80,
    height: 40,
    margin:10,
    backgroundColor: '#841584',
    borderRadius: 15,
    alignItems:'center'
  },
  viewText:{
    margin:10,
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
  }
  
});

export default SavedDesign;
