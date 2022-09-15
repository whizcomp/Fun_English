import React,{useContext} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import Button from './Modelling/MyButton';
import { useRoute,useNavigation } from '@react-navigation/native';
import {IndexContext} from './context/indexContext';
import { LevelContext } from './context/levelContext';

const Wronged = () =>{ 
    const {ind,setInd}=useContext(IndexContext)
    const {setCurrentLevel,currentLevel} =useContext(LevelContext)
    const route = useRoute();
    const navigation=useNavigation();
    const { word, quiz,ins} = route.params;
    const nextQuiz=()=>{
         
        if(ind==3){
           setInd(0)
           setCurrentLevel(currentLevel+1)
           navigation.navigate("NavPage")
       }else {
           setInd(ind+1);
           navigation.navigate("Assemble")
       }
       }
    return(
        <View style={styles.container}>
           <View style={styles.containerCheck}>
                    <View style={{flex:1}}>
                        <Text>You answered</Text>
                        <Text style={styles.wrongAnswer}>{ins.join("")}</Text>
                    </View>
            </View>
            <View style={styles.containerCheck}>
                <View>
                    <Text>The correct answer</Text>
                    <Text style={styles.correctAnswer}>{word}</Text>
                    <Text style={{textAlign:"center",paddingBottom:10,color:"black",fontSize:15}}>{quiz}</Text>
                </View>
            </View>
            <View style={styles.btnEdit}>
                <Button onPress={nextQuiz} title="Next"/>
            </View>
        </View>
    )};
const styles = StyleSheet.create({
    ans:{
        flexDirection:"row"
    },
    btnEdit:{
        paddingHorizontal:15,
        paddingVertical:10
    },
    container:{
        paddingTop:"15%"
    },
   containerCheck:{
    margin:15,
    padding:15,
    elevation:3,
    borderRadius:5,
    minHeight:100,
    marginVertical:"10%"
   },
   correctAnswer:{
    textAlign:"center",
    fontSize:24+6,
    color:"green",
    paddingVertical:"5%",
    textTransform:"uppercase"
   },
   wrongAnswer:{
    textAlign:"center",
    fontSize:24,
    color:"red",
    textTransform:"uppercase"
}
})
export default Wronged;
