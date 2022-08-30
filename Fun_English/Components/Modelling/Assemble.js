import React,{useContext, useEffect, useState}from 'react';
import {  View,StyleSheet,Text} from 'react-native';
import {getListings}from '../api/listings';
import {  getAdj } from '../api/localdb';
import {IndexContext }from '../context/indexContext';
import Quiz from '../quiz';

const Assemble = () => {
  const getWords= async ()=>{
    try {
      
      const {data}=await getListings(1, await getSavedAdj())
      console.log("data",data)
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
            {errors?<View style={styles.loadingContainer}><Text style={styles.error}>Error</Text></View>:!loading?<Quiz quiz={words[ind].definition}  word={words[ind].word} letters={words[ind].letters} id={words[ind].id}/>:<View style={styles.loadingContainer}><Text>loading...</Text></View> }
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10
    },
    error:{
      color:'red'
    },
    loadingContainer:{
     flex:1,
     justifyContent:"center",
     alignItems:"center" 
    }
  })
export default Assemble;
