import React,{useContext, useEffect, useRef} from 'react';
import { Animated, ScrollView, StyleSheet, View,ImageBackground,Text } from 'react-native';
import { LevelContext } from './context/levelContext';
import Button from './Modelling/MyButton';
import { useNavigation } from '@react-navigation/native';
const NavPage = () =>{
    useEffect(()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:2000,
            useNativeDriver:true
        }).start()
    })
    const fadeAnim=useRef(new Animated.Value(0)).current;
    const fadeIn=()=>{
        
    }
   const {currentLevel}=useContext(LevelContext)
   const navigation=useNavigation()
   const levels=[
        {title:"Level One",number:1},
        {title:"Level two",number:2},
        {title:"Level three",number:3},
        {title:"Level Four",number:4},
        {title:"Level Five",number:5}
]
    const setLevel=(level)=>{
        navigation.navigate("Assemble",{level})
    }
    return (
        <ImageBackground style={styles.bgStyle}source={require('../assets/background.png')} blurRadius={5}>
    <View style={styles.cover}>
        <Animated.View style={[styles.container,{opacity:fadeAnim}]}>
            {/* <Button  onPress={()=>navigation.navigate("NewWords")} title="Add Word"/> */}
            <ScrollView>{levels.map(level=><Button disabled={level.number>currentLevel?true:false}key={level.number} onPress={()=>setLevel(level)} title={level.title} style={{opacity:level.number>currentLevel?0.3:1}}/>)}</ScrollView>
        </Animated.View>
        <View style={styles.wordDayView}>
            <Text style={styles.txt}>Word of the day</Text>
            <View style={styles.line} />
            <Text style={styles.wordDay}>impeccable</Text>
            <Text style={styles.definition}>Graceful and attractive in appearance or behaviour</Text>
        </View>
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
    cover:{
        flex:1,
        paddingTop:"15%"
    },
    definition:{
        color:"fff",
        fontSize:16,
        paddingTop:"10%"
    },
    line:{
        paddingTop:10,
         borderBottomColor: 'black',
         borderBottomWidth: StyleSheet.hairlineWidth,
        
        },
    logo:{
        width:150,
        height:200
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
        fontSize:18,
        color:"#000",
        textTransform:"uppercase",
        paddingTop:10,
        fontWeight:"bold",
        paddingBottom:15
    },
    wordDayView:{
        minHeight:"30%",
        backgroundColor:"#fff",
        margin:20,
        padding:15,
        elevation:5
    }
})
export default NavPage;
