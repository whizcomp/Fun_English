import React,{useContext, useEffect, useRef,useState} from 'react';
import { Animated, ScrollView, StyleSheet, View,ImageBackground, TouchableWithoutFeedback} from 'react-native';
import { LevelContext } from './context/levelContext';
import Button from './Modelling/MyButton';
import { useNavigation } from '@react-navigation/native';
import { LimitContext } from './context/LimitContext';
import colors from './config/colors';
import Text from './Modelling/MyText';
import { getWord } from './api/listings';
import LottieView from 'lottie-react-native';

const NavPage = () =>{
    useEffect(()=>{
      getWordOfday();
    },[vocab])
    useEffect(()=>{
        
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:2000,
            useNativeDriver:true
        }).start()
    },[])
    const fadeAnim=useRef(new Animated.Value(0)).current;
    const fadeIn=()=>{
        
    }
    const getWordOfday=async()=>{
        setLoading(true)
        const {data,ok}=await getWord();
        if(ok){
        setLoading(false)
        setVocab(data[0])
        }else{
            setLoading(false) 
            setError(true) 
        }
        
        
    }
   const {limitContext}=useContext(LimitContext)
   const {currentLevel,setCurrentLevel}=useContext(LevelContext)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [vocab,setVocab]=useState([])
   const navigation=useNavigation()
   const levels=[
        {title:"Level One",number:1},
        {title:"Level two",number:2},
        {title:"Level three",number:3},
        {title:"Level Four",number:4},
        {title:"Level Five",number:5}
]
    const setLevel=(level)=>{
        const {number}=level
        setCurrentLevel(number)
        navigation.navigate("Assemble",{level})
    }
    return (
        <ImageBackground style={styles.bgStyle}source={require('../assets/background.png')} blurRadius={5}>
    <View style={styles.cover}>
        <Animated.View style={[styles.container,{opacity:fadeAnim}]}>
            {/* <Button  onPress={()=>navigation.navigate("NewWords")} title="Add Word"/> */}
            <ScrollView>{levels.map(level=><Button disabled={level.number>limitContext?true:false}key={level.number} onPress={()=>setLevel(level)} title={level.title} style={{opacity:level.number>limitContext?0.3:1}}/>)}</ScrollView>
        </Animated.View>
        {!error?<View style={styles.wordDayView}>
           {!loading?<><Text style={styles.txt}>Word of the day</Text>
            <View style={styles.line} />
            <Text style={styles.wordDay}>{vocab.word}</Text>
            <Text style={styles.definition}>{vocab.description}</Text></>:<View style={styles.loadingContainer}>
              <LottieView source={require('../assets/loading.json')} style={styles.lottie} autoPlay/></View>}
        </View>:<View style={styles.wordDayView}>
            <View style={styles.lottieView}><LottieView style={styles.lottie} source={require('./assets/12821-failed-attempt.json')} autoPlay/></View>
            <TouchableWithoutFeedback  onPress={()=>getWordOfday()}>
            <View style={styles.containerRetry}>
                <Text style={styles.retry}>Retry</Text>
            </View>
            </TouchableWithoutFeedback>
        </View> }
    </View>
    </ImageBackground>
)};
const styles = StyleSheet.create({
    bgStyle:{
     flex:1
    },
    container:{
        flex:1,
        paddingHorizontal:19,
    },
    containerRetry:{
        alignItems:"center",
        paddingBottom:3
    },
    cover:{
        flex:1,
        paddingTop:"15%"
    },
    definition:{
        fontSize:18,
        paddingTop:"10%"
    },
    line:{
        paddingTop:10,
         borderBottomColor: colors.black,
         borderBottomWidth: StyleSheet.hairlineWidth,
        
        },
        loadingContainer:{
            flex:1,
            justifyContent:"center",
            alignItems:"center" 
           },
    logo:{
        width:150,
        height:200
    },
    lottie:{
        width:200,
        height:200,
    },
    lottieView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden"
    },
    retry:{
        color:colors.white,
        textTransform:"uppercase",
        backgroundColor:colors.primary,
        paddingHorizontal:10,
        paddingVertical:5
    },
    txt:{
        fontSize:18
    },
    viewLogo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    wordDay:{
        fontSize:20,
        color:colors.black,
        textTransform:"uppercase",
        paddingTop:10,
        fontWeight:"bold",
        paddingBottom:8
    },
    wordDayView:{
        minHeight:"30%",
        backgroundColor:colors.white,
        margin:20,
        padding:15,
        elevation:5
    }
})
export default NavPage;
