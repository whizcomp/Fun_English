import React,{useContext} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'
import Button from './Modelling/MyButton';
import { useRoute,useNavigation } from '@react-navigation/native';
import {IndexContext} from './context/indexContext';
import { LevelContext } from './context/levelContext';

const Check = () => {
    const {ind,setInd}=useContext(IndexContext)
   const {setCurrentLevel,currentLevel}=useContext(LevelContext)
    const route = useRoute();
    const navigation=useNavigation();
    const { word, quiz} = route.params;
    const nextQuiz=()=>{
         
     if(ind==1){
        setInd(0)
        setCurrentLevel(currentLevel+1)
        navigation.navigate("NavPage")
    }else {
        setInd(ind+1);
        navigation.navigate("Assemble")
    }
    }
return(
    <View style={styles.containerCheck}>
            <View style={{paddingBottom:25}}> 
                <Text style={styles.word}>{word}</Text>
                <Text style={styles.def}>{quiz}</Text>
            </View>
                <LottieView source={require('./assets/50465-done.json')} style={styles.lottie} autoPlay/>
            <View style={styles.btnView}> 
                <Button onPress={nextQuiz} title="Next"/>   
            </View>
    </View>
)};
const styles = StyleSheet.create({
    btnView:{
        paddingTop:15
    },
    containerCheck:{
        paddingTop:"15%",
        paddingHorizontal:15
    },
    def:{
        fontStyle:"italic"
    },
    lottie:{
        width:200,
        height:300
    }, 
    word:{
        textTransform:"uppercase",
        color:"#08B92E",
        fontSize:34,
        paddingBottom:20
    }
})
export default Check;
