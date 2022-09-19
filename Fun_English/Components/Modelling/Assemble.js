import LottieView from 'lottie-react-native';
import React,{useContext, useEffect, useState}from 'react';
import {  View,StyleSheet,Text,TouchableWithoutFeedback} from 'react-native';
import {getListings}from '../api/listings';
import {  getAdj } from '../api/localdb';
import {IndexContext }from '../context/indexContext';
import Quiz from '../quiz';
import colors from '../config/colors';
const Assemble = () => {
  const getWords= async ()=>{
    
      const {data,status}=await getListings(1,await getSavedAdj())
      if(status==200){
      getSavedAdj()
      setWords(data)
      setLoading(false)
      }
      else{
        setErrors(true)
      setLoading(false)
      
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
            {errors?<View style={styles.loadingContainer}>
            <LottieView style={styles.lottie} source={require('../assets/12821-failed-attempt.json')} autoPlay/>
            <TouchableWithoutFeedback  onPress={()=>getWords()}>
            <View style={styles.containerRetry}>
              <Text style={styles.errInfo}>
                Network Error please try again later
              </Text>
                <Text style={styles.retry}>Retry</Text>
            </View>
            </TouchableWithoutFeedback>
        </View> :!loading?<Quiz quiz={words[ind].definition}  word={words[ind].word} letters={words[ind].letters} id={words[ind].id}/>:<View style={styles.loadingContainer}>
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
    containerRetry:{
      alignItems:"center",
      paddingBottom:3
  },
    errInfo:{
      color:colors.red,
      paddingVertical:10,
      fontSize:15
      
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
  retry:{
    color:colors.white,
    textTransform:"uppercase",
    backgroundColor:colors.primary,
    paddingHorizontal:10,
    paddingVertical:5
},
  })
export default Assemble;
