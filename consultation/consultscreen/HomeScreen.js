import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import NewHeader from '../consultcomp/NewHeader';
import { LinearGradient } from 'expo-linear-gradient';
import CommonBtn from '../consultcomp/CommonBtn';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
    <ScrollView> 
    <View>
     <NewHeader title={'Uniform Factory Virtual Consultation'} />
     <Text style={styles.heading} >Consultation options</Text>
     <View style={{marginTop:10, marginBottom:10}} > 
      <FlatList data={[ 1,1,1,1,1,1 ]} 
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) =>{
         return(
             <TouchableOpacity>
             <LinearGradient
        colors={['#d5a7d6', '#a55bde', '#f7a1f7']}
        style={styles.linearGradient}>
        <Text style={styles.textcat} >{'Category'+ index+1 } </Text>
      </LinearGradient>
              
             </TouchableOpacity>
         )
      }}  />
     </View>
     <Text style={styles.heading} > Fashion Experts </Text>
     <View style={{marginTop:10, alignItems: 'center' }} > 
     <FlatList 
      key={2}
        numColumns={2}
     data={[1,1,1,1,1,1]}   renderItem={({item, index}) =>{
           return(
            <View style={styles.ConsultItem} > 
            <Image source={require('../images/boy.jpeg') } style={styles.consultantimg} />

            <Text style={styles.ConsultantName} > Consultant{index + 1} </Text>
            <Text style={styles.ConsultantType} > Fashion Expert {index + 1} </Text>
            <Text style={[styles.status, {color:index /2 == 0 ? 'green': 'red', opacity: index /2 == 0 ? 1:0.7 }  ] } > {index /2 == 0 ? 'Available': 'Busy'} </Text>
  
            <CommonBtn w={135}  h={40}
             status={index /2 == 0 ?true:false }
             txt={'Book Appointment'} onClick={ ()=> {
                if(index /2 == 0 ){
                     navigation.navigate('BookAppointment')
                }
             } } />


            </View>
           )
     }}  />
     </View>
    </View>
   
    </ScrollView>
    <View style={styles.bottomView} >
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Completed')
      }} >
        <Image source={require('../images/check-mark.png')}
        style={styles.bottomImg}
         />
       
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Pending')
      }}  >
       
<Image source={require('../images/wall-clock.png')}
style={styles.bottomImg} />
       
      </TouchableOpacity>
     </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff'
  },
   heading: {
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf:'center',
    margin:10
   },
   linearGradient: {
    width: 120,
    height: 120, 
    borderRadius: 10, 
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
   },
   textcat: {
    color: '#fff',

   },
   ConsultItem:{
    width: '44%',
    height: 250,
    backgroundColor:'#fff',
    
    borderRadius: 10,
    borderWidth: 0.2, 
    margin: 10
  
   },
   consultantimg: {
    width: 100,
    height: 80,
    margin: 23,
    borderRadius: 10,
   },
   ConsultantName: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: -10

   },
   ConsultantType: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#a55bde',
    marginTop: 4,
    backgroundColor: '#f2f2f2',
    padding:4, 
    borderRadius: 15
   },
   status: {
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 4,
   },
   bottomView:{
    width: '90%',
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position:'absolute',
    bottom:20,
    backgroundColor:'#fff',
    alignSelf: 'center',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-evenly',
    opacity: .9

   },
   bottomImg:{
     width:30,
     height:30
   }

})




