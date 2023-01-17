import React,{useEffect, useState} from 'react'
import {Text, View, TextInput, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity,  } from 'react-native'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HomeScreen = () => {

  const [arr, setArr] = useState([]);

  const [theArray, setTheArray] = useState([]);


  useEffect(() => {
       getfunc()
}, [])



  const getfunc = ()  => {                 //functional 

    // Invoking get method to perform a GET request
    axios.get('https://api.thecatapi.com/v1/breeds')
    .then((response) => {
      console.log(response.data[0]);
      setArr(response.data)
    })
    .catch((error) => {
      console.log(error);

    });
  }

  const addToFavourates = (item) => {
    console.log("Hello Dosto  ---- ", item.name);
  //  setTheArray(item.name)
    setTheArray(theArray => [...theArray, item.name]);
    console.log("arra  == ",theArray );
  }


  return (
    <View style={{ width: windowWidth}} >

      <View style={styles.heading}>
        <Text style={{fontStyle:"italic", fontWeight: "800", color: 'white', marginBottom:10,fontSize: 24,}}> Dogy Hub</Text>
      </View>
      
      <ScrollView> 
          <View>
            {arr && arr.map((item) => (

              <TouchableOpacity 
              onPress={
               () => {
                 addToFavourates(item)
               }
              }
              > 
                 <View style={styles.carddata}>
                    <Image style={styles.image} source={{uri : item?.image?.url}}/>
                    
                    <View style={{  flex: 1}}> 
                      <Text style={{fontStyle:"italic", fontWeight: "800",marginBottom:10,fontSize: 18}}>{item.name} </Text>
                      <Text numberOfLines={4} >{item.description} </Text>
                    </View>
                 </View>   
              </TouchableOpacity>
               
          ))}
          </View>
      </ScrollView>
    </View>
    
  )
}
const styles = StyleSheet.create({

  heading:{
      height: 50,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent: 'center'
  },
  image : {
    width: 100,
    height: 100,
    marginRight:25,
    borderRadius:10,
    //margin:50
  },

  carddata :{
    //width: windowWidth-40,
    // height: 100,
    flexDirection:"row",
    marginBottom:5,
    margin:20,
    borderWidth:2,
    borderRadius:10,
    padding: 10,
    borderColor:'red',

  },

  cardbox:{
    flexDirection:"row",
  }
})

export default HomeScreen


