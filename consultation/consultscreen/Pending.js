import { View, Text, FlatList,StyleSheet, Image } from 'react-native'
import React from 'react'

const Pending = () => {
  return (
    <View style={styles.container} >
    

    <View>
      <FlatList 
       data={[1,1,1]}
       renderItem={({item,index})=>{
        return(
          <View style={styles.itemView} > 
             <Image source={require('../images/boy.jpeg')} style={styles.ConsulatntImg} />
           <View> 
           <Text style={styles.name} > {'John Max'}</Text>
          <Text style={styles.slot} > {'09:00 AM-11:00 AM'} </Text>     
           </View>
             <Text style={styles.status} > 
             {'Pending'}
             </Text>

          </View>
          
        )
       } }

      />
    </View>
    </View>
  )
}    
 
export default Pending;

const styles= StyleSheet.create({
  container:{
    flex:1,
    
  },
  itemView:{
    width:'94%',
    height:100,
    borderRadius:10,
    borderWidth:0.5,
    alignSelf:'center',
    marginTop:10,
    flexDirection:'row'

  },
  ConsulatntImg:{
    width:60,
    height:60,
    borderRadius:30,
    marginLeft: 10,
    marginTop:12
  },
  name:{
     fontSize: 18,
     fontWeight: '600',
     marginLeft: 20,
     marginTop:5
  },
  slot:{
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5

  },
  status:{
    fontSize:15,
    fontWeight: 'bold',
    margin: 16,
    borderRadius:10,
    backgroundColor:'#f2f2f2',
    padding:5,
    color: 'grey'
  }
})