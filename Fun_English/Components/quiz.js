import React, { useEffect, useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from '../MyText';
import Box from './Modelling/Box';
const Quiz = ({quiz,word="",letters}) => {
    useEffect(()=>{
        wordArr.map(letter=>val.push(null));
        setIns(val)
    },[ins])
    const wordArr=word.split("");
        let val=[]
    const [ins,setIns]=useState([])
    const reset=()=>{
        setIndex(0)
        let val=[];
        wordArr.map(letter=>val.push(null));
        setIns(val)
    }
    let [index,setIndex]=useState(0)
    const raw=letters.split("")
    const checkAnswer=()=>{
       console.log('yes')
    }
    const addToAnswer=(word)=>{
        
        let newValue=[...ins]
        newValue[index]=word;
        setIndex(index+1)
        setIns(newValue)
        if(index==wordArr.length-1){
            setTimeout(() => {
                checkAnswer()
            }, 500);
            
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
      
      <View style={styles.lettersCover}>{ins.map(word=><Box style={styles.box} lttr={word} onPress={()=>removeFromAnswer(word)} />)}</View>
      <TouchableWithoutFeedback onPress={reset}>
        <View style={styles.clearView}>
        <Text style={styles.clear}>X</Text></View>
      </TouchableWithoutFeedback>
      <View style={styles.raw}>
      <View style={styles.lettersCover1}>{raw.map(word=><Box onPress={()=>addToAnswer(word)} lttr={word} />)}</View>
      </View>
    </View>
)};
const styles = StyleSheet.create({
    ask:{
        paddingTop:"5%",
        color:"#08B92E"
    },
    box:{
        width:"auto",
        minWidth:30,
        height:35
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
        justifyContent:"center"
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
