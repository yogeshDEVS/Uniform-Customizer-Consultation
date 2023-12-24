import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView,Alert  } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonBtn from '../consultcomp/CommonBtn';
import { LinearGradient } from 'expo-linear-gradient';



let DaysList = [];
const BookAppointment = ({navigation}) => {
        
    const [selectedSlot, setSelectedSlot] =useState(-1);
    const [selectedGender, setSelectedGender] =useState(0);
    const [selectedDay, setSelectedDay]= useState(-1);
    const [days, setDays] =useState([]);

    useEffect(()=>{
         DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth()+1); i++) {
      DaysList.push({day:i, selected:false});
    }
    setDays(DaysList);
    },[] );


   const getDays=month =>{
    let days =0;
    if (month==1){
        day=31;
    } else if (month==2){
        days=28;
    } else if (month == 3) {
        days = 31;
      } else if (month == 4) {
        days = 30;
      } else if (month == 5) {
        days = 31;
      } else if (month == 6) {
        days = 30;
      } else if (month == 7) {
        days = 31;
      } else if (month == 8) {
        days = 31;
      } else if (month == 9) {
        days = 30;
      } else if (month == 10) {
        days = 31;
      } else if (month == 11) {
        days = 30;
      } else if (month == 12) {
        days = 31;
      }
      return days;
   };

    return (  <ScrollView style={styles.container} >
        <View style={styles.container} >
            <Image source={require('../images/boy.jpeg')} style={styles.ConsultantImg} />
            <Text style={styles.name} > Mark Juck </Text>
            <Text style={styles.type} > Fashion Specialist </Text>
            <Text style={styles.slot} > Select Date </Text>
            <View> 
             <FlatList 
             horizontal
             showsHorizontalScrollIndicator={false}
             data={days} 
             keyExtractor={({item, index})=> index}
             renderItem={({item, index})=>{
                return(
                    <TouchableOpacity style={{width:50, height:50, borderRadius:10, justifyContent:'center', alignItems:'center', backgroundColor: selectedDay==index ? '#a55bde':'#f2f2f2' ,
                    borderWidth:selectedDay==index ? 0:1,
                     margin: 10, }} onPress={()=>{
                       
                        if(item.day<new Date().getDate()){
                            Alert.alert(
                "Invalid Date",
                "Please select a current or future date.",
                [
                    { text: "OK" }
                ]
            );
                        }else{ 
                            setSelectedDay(index);
                            }
                     }} >
                          <Text style={{color:selectedDay==index ? '#fff':'#000', fontWeight:'700'}}> {item.day} </Text>
                    </TouchableOpacity>
                )
             } } />
            </View>
            <Text style={styles.slot} > Available Slots </Text>
            <View>
                <FlatList
                  key={2}
                 numColumns={2}
                 data={['09:00 AM-11:00 AM', '11:30 PM-1:30 PM', '02:00 PM-04:00 PM', '04:30 PM-06:30 PM']} renderItem={({ item, index }) => {
                    return(
                        <TouchableOpacity style={[styles.timeSlot,{borderColor:selectedSlot==index?'green':'grey'}, ] } onPress={()=>{
                            setSelectedSlot(index);
                        }} >

                            <Text style={{color: selectedSlot==index?'green':'grey'}} >{item} </Text>
                        </TouchableOpacity>
                    )
                }

                } />
            </View>
            <Text style={styles.slot} > Your Name </Text>
            <TextInput style={styles.nameInput} placeholder={'Enter Name'} />
            <Text style={styles.slot} > Select Gender </Text>
            <View style={styles.genderView} > 
                <TouchableOpacity style={[styles.gender,{borderWidth: 0.8, borderColor:selectedGender==0?'green':'grey' } ]} onPress={()=>{
                    setSelectedGender(0);
                }} >
                    <Image source={require('../images/male.png')} style={{width:24, height: 24}} />
                    <Text style={styles.genderName}> Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.gender,{borderWidth:0.8,borderColor:selectedGender==1?'green':'grey' } ]}  onPress={()=>{
                    setSelectedGender(1);
                }} >
                    <Image source={require('../images/female.png')} style={{width:24, height: 24}} />
                    <Text style={styles.genderName}>Female</Text>
                </TouchableOpacity>
             </View>
             <CommonBtn w={300} h={45} txt={'Book Now'} status={true} onClick={()=>{
                navigation.navigate('AppointSuccess')
             }} />
        </View>
        </ScrollView>
    )
}

export default BookAppointment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    ConsultantImg: {
        width: 80,
        height: 80,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 30
    },
    name: {
        fontSize: 17,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 5,

    },
    type: {
        fontSize: 14,
        fontWeight: '700',
        alignSelf: 'center',
        marginTop: 0,
        color: 'grey',
        backgroundColor: '#f2f2f2',
        color: '#a55bde',
    },
    slot: {
        color: '#000',
        fontSize: 18,
        fontWeight: '700',
        marginTop: 15,
        alignSelf: 'center'
    }, 
    timeSlot: {
        width: '45%',
        height: 40,
        borderRadius: 5,
        borderWidth: 0.5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput:{
        borderRadius: 10,
        marginTop: 10,
        width: '92%',
        height: 45,
        borderWidth: 0.5,
        alignSelf: 'center',
        paddingLeft: 20,
    },
    genderView:{
        marginTop:20,
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection: 'row',
        marginBottom:15

 
    },
    gender: {
        borderRadius:10,
        width:60,
        height: 60,
        justifyContent:'center',
        alignItems: 'center'

    },
    genderName:{
        fontSize: 12,
        alignSelf:'auto',
        padding:5
    }
    
})






