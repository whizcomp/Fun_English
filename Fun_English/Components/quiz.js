import React, { useContext, useEffect, useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from '../MyText';
import Box from './Modelling/Box';
import { useNavigation } from '@react-navigation/native'

const Quiz = ({quiz,word="",letters}) => {
    useEffect(()=>{
        reset()
        wordArr.map(letter=>val.push(null));
        setIns(val)
    },[word])
    const navigation=useNavigation()
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
        setTimeout(() => {
            navigation.navigate('Wrong',{word,quiz,ins})
        }, 500);
       
    }
    const addToAnswer=(word)=>{
        let newValue=[...ins]
        newValue[index]=word;
        setIndex(index+1)
        setIns(newValue)
        if(index==wordArr.length-1){
            checkAnswer()}
    }
    
    return(
    <View style={{flex:1}}>
      <Text>Level one</Text>
      <Text style={styles.ask}>What word means:</Text>
      <Text style={styles.quiz}>{quiz}</Text>
      <View style={styles.lettersCover}>{ins.map(word=><Box style={styles.box} lttr={word}  />)}</View>
      <View style={styles.raw}>
      <View style={styles.lettersCover1}>{raw.map(word=><Box onPress={()=>addToAnswer(word)} lttr={word} />)}</View>
      </View>
      <View style={{flexDirection:"row",paddingBottom:"15%"}}>
        <Text>clears</Text>
        <Text>bookmark</Text>
        <Text>Next</Text>

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
        paddingVertical:15
    },
    lettersCover:{
        marginTop:'5%',
        flexDirection:"row",
        flexWrap:"nowrap",
        justifyContent:"space-around"
    },
    lettersCover1:{
        paddingTop:'35%',
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
