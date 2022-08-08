import React,{useContext, useState}from 'react';
import {  View,StyleSheet} from 'react-native';
import {IndexContext }from '../context/indexContext';
import Quiz from '../quiz';

const Assemble = () => {
  const {ind}=useContext(IndexContext)
  console.log(ind)
    const [words,setWords]=useState([{word:"improve",letters:"spaomriesemtbav",def:"To make or become better in quality"},{word:"impecable",letters:"pahaimacceabsle",def:"Having no flaws; perfect"},{word:"lavish",letters:"elpohsaiviaq",def:" large in quantity and expensive or impressive"}])
  
    return (
        <View style={styles.container}>
            <Quiz quiz={words[ind].def}  word={words[ind].word} letters={words[ind].letters}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:10
    }
  })
export default Assemble;
