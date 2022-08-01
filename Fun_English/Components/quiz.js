import React, { useEffect, useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from '../MyText';
import Box from './Modelling/Box';

const Quiz = ({quiz,word=""}) => {
    useEffect(()=>{
        wordArr.map(letter=>val.push(null));
        setIns(val)
    },[ins])
    const wordArr=word.split("");
        //["i","m","p","r","o","v","e"]
        let val=[]
    const [ins,setIns]=useState([])
    const reset=()=>{
        setIndex(0)
        let val=[];
        wordArr.map(letter=>val.push(null));
        setIns(val)
    }
    let [index,setIndex]=useState(0)
    const raw="spaomriesemtbav".split("")
    const checkAnswer=()=>{
        if(JSON.stringify(ins) === JSON.stringify(wordArr)) console.log(ins);
        console.log('====================================');
        console.log("the question",wordArr);
        console.log('====================================');
        console.log('====================================');
        console.log("the ans",ins);
        console.log('====================================');
        
    }
    const addToAnswer=(word)=>{
        
        let newValue=[...ins]
        newValue[index]=word;
        setIndex(index+1)
        setIns(newValue)
        if(index==wordArr.length-1){
            checkAnswer()
        }
    }
    const removeFromAnswer=(lttr)=>{
        console.log(ins.indexOf(lttr))
    }
    return(
    <View>
      <Text>Level one</Text>
      <Text style={styles.ask}>What word means:</Text>
      <Text style={styles.quiz}>{quiz}</Text>
      {index!==wordArr.length?<>
      <View style={styles.lettersCover}>{ins.map(word=><Box lttr={word} onPress={()=>removeFromAnswer(word)} />)}</View>
      <TouchableWithoutFeedback onPress={reset}>
        <View style={styles.clearView}>
        <Text style={styles.clear}>X</Text></View>
      </TouchableWithoutFeedback>
      <View style={styles.raw}>
      <View style={styles.lettersCover1}>{raw.map(word=><Box onPress={()=>addToAnswer(word)} lttr={word} />)}</View>
      </View></>:<View>
        <Text>{ins.toString()}</Text></View>}
    </View>
)};
const styles = StyleSheet.create({
    ask:{
        paddingTop:"5%",
        color:"#08B92E"
    },
    clear:{
        color:"red",
        fontSize:24,
        
    },
    clearView:{
        justifyContent:"flex-end",
        paddingHorizontal:10
    },
    lettersCover:{
        marginTop:'5%',
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-evenly",
        alignContent:"center"
    },
    lettersCover1:{
        paddingTop:'55%',
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center"
    },
    raw:{
        flex:1,
    },
    quiz:{
        paddingTop:"10%",
        fontSize:22,
        fontWeight:"bold"
    }
});
export default Quiz;
