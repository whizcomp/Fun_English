import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React,{useContext, useEffect, useState}from 'react';
import {  View,StyleSheet,Text} from 'react-native';
import {getListings}from '../api/listings';
import {  getAdj } from '../api/localdb';
import {IndexContext }from '../context/indexContext';
import Quiz from '../quiz';
import colors from '../config/colors';
const Assemble = () => {
  const getWords= async ()=>{
    try {
      const {data}=await getListings(1,await getSavedAdj())
      getSavedAdj()
    setWords(data)
    setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      setErrors(true)
    }
  }
  const getSavedAdj=async()=>{
    
    const list= await getAdj()
    return list.toString()
   }
  useEffect(()=>{
    getWords()
  },[])  
  const {ind}=useContext(IndexContext)
  
    const [words,setWords]=useState([])
   const [loading,setLoading]=useState(true)
   const [errors,setErrors]=useState(false)
    return (
        <View style={styles.container}>
            {errors?<View style={styles.loadingContainer}><Text style={styles.error}>Error</Text></View>:!loading?<Quiz quiz={words[ind].definition}  word={words[ind].word} letters={words[ind].letters} id={words[ind].id}/>:<View style={styles.loadingContainer}>
              <LottieView source={require('../../assets/loading.json')} style={styles.lottie} autoPlay/></View> }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10,
      backgroundColor:colors.background
    },
    error:{
      color:colors.red
    },
    loadingContainer:{
     flex:1,
     justifyContent:"center",
     alignItems:"center" 
    },
    lottie:{
      width:200,
      height:300
  },
  })
export default Assemble;
