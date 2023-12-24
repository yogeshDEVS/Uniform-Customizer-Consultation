import React, { useState, useContext, useRef } from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Text,  Modal, Button } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import * as ImagePicker from 'expo-image-picker';
import { DesignContext } from './DesignContext'; // Import DesignContext
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import Header from  './components/Header' ;



// Import useDispatch from react-redux and the addToCart action
import { useDispatch } from 'react-redux';
import { addToCart } from  './components/redux/action';
import { addToSavedDesigns } from './components/redux/action';

const Details = () => {
    const [tshirtColor, setTshirtColor] = useState('#006548'); 
    const [logoChest, setLogoChest] = useState(null);
    const [logoRightHand, setLogoRightHand] = useState(null);
    const [logoLeftHand, setLogoLeftHand] = useState(null);
    const ref=useRef();
    const [imageUri,setImageUri]=useState('');
    const navigation = useNavigation();

    const [selectedSize, setSelectedSize] = useState('S');
    const [price, setPrice] = useState(19.99); // Set initial price
    const [detailsModalVisible, setDetailsModalVisible] = useState(false);
   

    const dispatch = useDispatch();

    const handleAddScreenshotUri = (uri) => {
        // Generate a unique ID for the key
        const uniqueId = Date.now().toString();
      
        // Capture the screenshot and then dispatch the action
        ref.current.capture().then((capturedUri) => {
          console.log("Captured image URI: ", capturedUri);
          setImageUri(capturedUri);

          const imageUri = { uri: capturedUri };
      
          // Create an item object with the details you want to add to the cart
          const item = {
            name: 'Customized Shirt' + uniqueId,
            price: price.toFixed(2),
            image: imageUri, // The captured screenshot URI
            // color: tshirtColor, // The selected color for the shirt
            size: selectedSize, 
            material: selectedMaterial,
             // price: '29.99',
          };
      
          // Dispatch the addToCart action with the item object
          dispatch(addToCart(item));
        }).catch((error) => {
          console.error("Error capturing image: ", error);
        });
      };

      

      const handleSaveDesign = (uri) => {
        // Generate a unique ID for the key
        const uniqueId = Date.now().toString();
      
        // Capture the screenshot and then dispatch the action
        ref.current.capture().then((capturedUri) => {
          console.log("Captured image URI: ", capturedUri);
          setImageUri(capturedUri);
      
          const imageUri = { uri: capturedUri };
      
          // Create an item object with the details you want to save
          const item = {
            name: 'Customized Shirt' + uniqueId,
            image: imageUri, // The captured screenshot URI
            // No price needed for saved designs
          };
      
          // Dispatch the addToSavedDesigns action with the item object
          dispatch(addToSavedDesigns(item));
        }).catch((error) => {
            console.error("Error capturing image: ", error);
          });
        };
      

    const handleSizeChange = (size) => {
        setSelectedSize(size);
      };
  
      const handleAddToCart = () => {
        alert('Item added to cart!');
      };


    const [selectedMaterial, setSelectedMaterial] = useState('Cotton');

    const handleMaterialChange = (material) => {
      setSelectedMaterial(material);
    };

    const { saveDesign, addScreenshotUri, screenshotUris } = useContext(DesignContext);
    // const { saveDesign, handleAddScreenshotUri } = useContext(DesignContext);

    // const { saveDesign, setScreenshotUri } = useContext(DesignContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [logoPosition, setLogoPosition] = useState('chest');

    const handleColorChange = (color) => {
        setTshirtColor(color);
    };
    const pickImage = async (position) => {

        setModalVisible(false);
    
        if (position === 'Chest') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
        
            
            if (!result.cancelled) {
                setLogoChest(result.uri);
            }
            
        } else if (position === 'RightHand') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
    
            if (!result.cancelled) {
                setLogoRightHand(result.uri);
            }
        } else if (position === 'LeftHand') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

    
            if (!result.cancelled) {
                setLogoLeftHand(result.uri);
            }
        }
    };
    

    return (
        <>
        <ScrollView contentContainerStyle={styles.container} alwaysBounceVertical={true}>
        
            <ViewShot ref={ref} style={styles.shirtContainer}>
                <View style={styles.shirtContainer}>
                    <Image
                        source={require('./assets/shirt.png')}
                        style={[styles.tshirtImage, { tintColor: tshirtColor }]}
                    />
                    {logoChest && <Image source={{ uri: logoChest }} style={styles.logoImageChest} />}
        {logoRightHand && <Image source={{ uri: logoRightHand }} style={styles.logoImageRightHand} />}
        {logoLeftHand && <Image source={{ uri: logoLeftHand }} style={styles.logoImageLeftHand} />}

                </View>
            </ViewShot>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.chestButton} onPress={() => pickImage('Chest')}>
                     <Text style={styles.buttonText}>Upload on Chest</Text>
                       </TouchableOpacity>
                    <TouchableOpacity style={styles.rightHandButton} onPress={() => pickImage('RightHand')}>
                        <Text style={styles.buttonText}>Upload on Right Hand</Text>
                    </TouchableOpacity>
                 <TouchableOpacity style={styles.leftHandButton} onPress={() => pickImage('LeftHand')}>
                 <Text style={styles.buttonText}>Upload on Left Hand</Text>
                     </TouchableOpacity>

                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setModalVisible(true)}>
    <Text style={styles.buttonText}>Upload Logo</Text>
</TouchableOpacity>

            <View style={styles.colorPickerContainer}>
                <ColorPicker
                    onColorChangeComplete={handleColorChange}
                    style={{ flex: 1 }}
                    color={tshirtColor}
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={() =>{
                 ref.current.capture().then(uri => {
                console.log("do something with ", uri);
                setImageUri(uri);
                   });
            } }>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton} onPress={async () => {
               try {
             await Sharing.shareAsync(imageUri);
              } catch (error) {
              console.error('Failed to share:', error);
                 }
                }}>
        <Text style={styles.buttonText}> 🔗</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.addButton} onPress={() => {
        ref.current.capture().then((uri) => {
          console.log("do something with ", uri);
          setImageUri(uri);
          handleAddScreenshotUri(uri);
          handleSaveDesign(uri);
        });
      }}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      {/* <Button title="Shop" onPress={() => navigation.navigate('ShopScreen')} /> */}

          <Picker
        selectedValue={selectedMaterial}
        style={styles.materialPicker}
        onValueChange={(itemValue) => handleMaterialChange(itemValue)}
      >
        <Picker.Item label="Cotton" value="Cotton" />
        <Picker.Item label="Polyester" value="Polyester" />
        <Picker.Item label="Blend" value="Blend" />
      </Picker>

      <TouchableOpacity style={styles.detailsButton} onPress={() => setDetailsModalVisible(true)}>
                <Text style={styles.buttonText}>Shop</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={detailsModalVisible}
                onRequestClose={() => {
                    setDetailsModalVisible(!detailsModalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Text style={styles.labelText}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeBox,
                                    selectedSize === size && styles.selectedSizeBox,
                                ]}
                                onPress={() => handleSizeChange(size)}
                            >
                                <Text style={styles.sizeText}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                  
                        <Text style={styles.priceText}>Price: ${price.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.addCartButton} onPress={() => {
      ref.current.capture().then((uri) => {
        console.log("do something with ", uri);
        setImageUri(uri);
        handleAddScreenshotUri(uri); // Call the function to dispatch the action
      });
    }}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* <TouchableOpacity style={styles.addButton} onPress={() => {
      ref.current.capture().then((uri) => {
        console.log("do something with ", uri);
        setImageUri(uri);
        handleAddScreenshotUri(uri); // Call the function to dispatch the action
      });
    }}>
      <Text style={styles.buttonText}>Add to Cart</Text>
    </TouchableOpacity> */}
    <View style={styles.cartIcon} > 
    <Header /> 
    </View>

        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        backgroundColor: '#F5FCFF',
    },
    shirtContainer: {
        width: 300,
        height: 250,
        marginBottom: 20,
    },
    tshirtImage: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    logoImageChest: {
        position: 'absolute',
        width: 60,
        height: 60,
        resizeMode: 'contain',
        top: '40%',
        left: '57%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    logoImageRightHand: {
        position: 'absolute',
        width: 30,
        height: 35,
        resizeMode: 'contain',
        top: '55%',
        left: '87%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    logoImageLeftHand: {
        position: 'absolute',
        width: 27,
        height: 35,
        resizeMode: 'contain',
        top: '55%',
        left: '38%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }, 
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    chestButton: {
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
        margin: 10,
    },
    rightHandButton:{
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
        margin: 10,

    },
    leftHandButton: {
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
        margin: 10,
    },
    buttonContainer: {
        marginBottom: -10,
        Bottom: -10,
        width: '80%',
        marginTop: 18,
        backgroundColor: '#841584',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight:'bold'
    },
    colorPickerContainer: {
        width: 250, // Adjust this width as needed
        height: 90, // Adjust this height as needed
        marginTop: 0,
    },
    saveButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
    },
    shareButton: {
        position: 'absolute',
        right: 10,
        top: 70,
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
    },
    addButton: {
        position: 'absolute',
        right: 10,
        top: 130,
        padding: 10,
        backgroundColor: '#841584',
        borderRadius: 15,
    },
    materialPicker: {
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 25,
        // padding: 10,
        // marginBottom: 5,
        marginTop: -180,
        marginleft:90,
        borderColor: '#841584',
        borderWidth: 2,
      },
      detailsButton: {
        backgroundColor: '#841584',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        
        marginLeft: 280,
        marginTop: -100
    },
    sizePicker: {
        width: '100%',
        backgroundColor: '#841584',
        borderRadius: 25,
        borderColor: '#841584',
        borderWidth: 0
    },
    priceText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        marginBottom:20,
        paddingBottom: 10
    },
    addToCartButton: {
        backgroundColor: '#841584',
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    sizeBox: {
        width: 50,
        height: 50,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#841584',
        borderRadius: 10,
    },
    selectedSizeBox: {
        backgroundColor: '#841584',
     
    },
    sizeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    labelText: {
        fontSize: 24,  
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cartIcon: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 1, 
      },
      addCartButton: {
        position: 'absolute',
        right: 110,
        top: 210,
        padding: 10,
        paddingleft: 150,
        backgroundColor: '#841584',
        borderRadius: 15,
      }
});

export default Details;