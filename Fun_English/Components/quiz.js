import React, { useEffect, useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from '../MyText';
import Box from './Modelling/Box';
import LottieView from 'lottie-react-native';
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
    const [waitingPage,setWaitingPage]=useState(false)
    let [index,setIndex]=useState(0)
    const raw="spaomriesemtbav".split("")
    const checkAnswer=()=>{
       setWaitingPage(true) 
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
      {!waitingPage?<>
      <Text style={styles.ask}>What word means:</Text>
      <Text style={styles.quiz}>{quiz}</Text>
      
      <View style={styles.lettersCover}>{ins.map(word=><Box lttr={word} onPress={()=>removeFromAnswer(word)} />)}</View>
      <TouchableWithoutFeedback onPress={reset}>
        <View style={styles.clearView}>
        <Text style={styles.clear}>X</Text></View>
      </TouchableWithoutFeedback>
      <View style={styles.raw}>
      <View style={styles.lettersCover1}>{raw.map(word=><Box onPress={()=>addToAnswer(word)} lttr={word} />)}</View>
      </View>
        </>:<View style={styles.containerCheck}>
            <View style={{paddingBottom:25}}><Text>Seme</Text>
            </View>
                <LottieView source={require('./assets/50465-done.json')} style={styles.lottie} />
        </View>}
    </View>
)};
const styles = StyleSheet.create({
    ask:{
        paddingTop:"5%",
        color:"#08B92E"
    },
    containerCheck:{
        justifyContent:"center",
        alignItems:"center"
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
    lottie:{
        width:200,
        height:300
    },
    motis:{
        backgroundColor:'red'
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
