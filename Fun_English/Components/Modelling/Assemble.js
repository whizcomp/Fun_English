import React,{useContext, useEffect, useState}from 'react';
import {  View,StyleSheet,Text} from 'react-native';
import apiClient from '../api/apisauce';
import {IndexContext }from '../context/indexContext';
import Quiz from '../quiz';

const Assemble = () => {
  const getWords= async ()=>{
    try {
      const{ data}=await apiClient.get()
      console.log("data",data)
    setWords(data)
    setLoading(false)
    } catch (error) {
      setLoading(false)
      setErrors(true)
    }
    
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
            {!loading?<Quiz quiz={words[ind].definition}  word={words[ind].word} letters={words[ind].letters}/>:<View style={styles.loadingContainer}><Text>loading...</Text></View> }
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10
    },
    loadingContainer:{
     flex:1,
     justifyContent:"center",
     alignItems:"center" 
    }
  })
export default Assemble;
