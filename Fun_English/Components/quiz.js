import React, { useContext, useEffect, useState } from 'react';
import {Dimensions, View,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Text from './Modelling/MyText';
import Box from './Modelling/Box';
import { useNavigation } from '@react-navigation/native'
import Button from './Modelling/MyButton';
import colors from './config/colors';
import ProgressBar from 'react-native-progress/Bar';
import { LevelContext } from './context/levelContext';
import { IndexContext } from './context/indexContext';
import convert from"number-to-text"
import 'number-to-text/converters/en-us';
import Toast from 'react-native-toast-message';

const screenWidth = Dimensions.get('screen').width*0.9;

const Quiz = ({quiz,word="",letters,id}) => {
    useEffect(()=>{
        reset()
        wordArr.map(letter=>val.push(null));
        setIns(val)
        tip()
    },[word])
    const {currentLevel}=useContext(LevelContext)
    const {ind}=useContext(IndexContext)
    const tip=()=>{
        if(ind==1){
            Toast.show({
                type: 'success',
                text1: 'Tip',
                text2: `The first and last letters match the puzzle`,
                visibilityTime:10000
              });
        }
    }
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
        const insString=ins.join("");
        if(insString.toUpperCase()==word.toUpperCase()){
            navigation.navigate('Check',{word,quiz,id}) 
          }
        else{
            navigation.navigate('Wrong',{word,quiz,ins,id}) 
        }    
    }
    const addToAnswer=(word)=>{
        if(index>wordArr.length-1)return;
        let newValue=[...ins]
        newValue[index]=word;
        setIndex(index+1)
        setIns(newValue)
        
    }
    
    return(
    <View style={{flex:1}}>
      <Text>Level {convert.convertToText(currentLevel)}</Text>
      <View style={styles.progress}>
      <ProgressBar progress={ind/10} width={screenWidth} height={10} color={colors.primary}/>
      </View>
      <Text style={styles.ask}>What word means:</Text>
      <Text style={styles.quiz}>{quiz}</Text>
      <View style={styles.lettersCover}>{ins.map((word,index)=><Box style={styles.box} lttr={word} key={index} />)}</View>
      <View style={styles.raw}>
      <View style={styles.lettersCover1}>{raw.map((word,index)=><Box  key={index}onPress={()=>addToAnswer(word)} lttr={word} />)}</View>
      </View>
      <View >
      <Button onPress={reset} title="Reset"style={{backgroundColor:"#8B0000"}}/>
        <Button onPress={checkAnswer} title="Check answer"/>
      </View>
    </View>
)};
const styles = StyleSheet.create({
    ask:{
        paddingTop:"5%",
        color:colors.primary
    },
    box:{
        width:"auto",
        minWidth:30,
        height:35
    },
    clear:{
        color:colors.red,
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
    progress:{
        paddingVertical:15
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
