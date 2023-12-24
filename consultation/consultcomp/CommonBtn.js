import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const CommonBtn = ({w, h, txt, onClick, status}) => {
  return (
   <TouchableOpacity onPress={()=>{
    onClick();
   } } style={{alignSelf: 'center', marginTop: 10,marginBottom: 10 }} >
       {status?( <LinearGradient colors={['#d5a7d6', '#a55bde', '#f7a1f7']} style={{width: w, height: h, justifyContent:'center', alignItems: 'center', borderRadius:15  }} >
      <Text style={{color:'#fff', fontSize: 14, fontWeight: 'bold' }} >{txt} </Text>
       </LinearGradient>):( <LinearGradient colors={[ '#8e8e8e', '#f2f2f2', '#8e8e8e']} style={{width: w, height: h, justifyContent:'center', alignItems: 'center', borderRadius:15, opacity:.7 }} >
      <Text style={{color:'#8e8e8e', fontSize: 14, fontWeight: 'bold' }} >{txt} </Text>
       </LinearGradient>)}
      
   
   </TouchableOpacity>
  )
}

export default CommonBtn;