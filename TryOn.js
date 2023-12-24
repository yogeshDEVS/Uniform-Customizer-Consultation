import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';

const TryOn = ({ route, navigation }) => {
    const { image } = route.params;
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

  return (
    <View style={{ flex: 1 }}>
       <Camera
        style={{ flex: 1 }}
        type={Camera.Constants.Type.front}
      >
       <Image
          source={image}
          style={styles.overlayImage}
          resizeMode="cover"
        />
       </Camera>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
    overlayImage: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '70%', 
    },
  });

export default TryOn;
