import React,{useContext, useEffect, useRef} from 'react';
import { Animated, ScrollView, StyleSheet, View,Image } from 'react-native';
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
        
    }
    return (
    <View style={styles.cover}>
        <View style={styles.viewLogo}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </View>
        <Animated.View style={[styles.container,{opacity:fadeAnim}]}>
            {/* <Button  onPress={()=>navigation.navigate("NewWords")} title="Add Word"/> */}
            <ScrollView>{levels.map(level=><Button disabled={level.number>currentLevel?true:false}key={level.number} onPress={()=>setLevel(level)} title={level.title} style={{opacity:level.number>currentLevel?0.3:1}}/>)}</ScrollView>
        </Animated.View>
    </View>
)};
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:19,
    },
    cover:{
        flex:1
    },
    logo:{
        width:150,
        height:200
    },
    viewLogo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    }
})
export default NavPage;
