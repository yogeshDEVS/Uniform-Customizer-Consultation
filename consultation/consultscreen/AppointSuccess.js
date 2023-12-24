import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AppointSuccess = ({navigation}) => {
  return (
    <View style={styles.container} >
        <Image source={require('../images/checked.png')} style={styles.success}  />
        <Text style={styles.message} >{'Your Appointment is booked successfully!!'} </Text>
        <TouchableOpacity style={styles.gohome} onPress={()=>{
                 navigation.navigate('HomeScreen')
        }} >
            <Text> Go to Home </Text>
        </TouchableOpacity>
    </View>
  )
}

export default AppointSuccess;


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    success:{
        alignSelf:'center',
        height: 100,
        width: 100
    },
    message:{
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center', 
        margin: 25
    },
    gohome:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        borderWidth: .5
    }
});