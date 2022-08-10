import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LevelContext } from './context/levelContext';
import Button from './Modelling/MyButton';
import { useNavigation } from '@react-navigation/native';

const NavPage = () =>{
    
    const {currentLevel}=useContext(LevelContext)
    const navigation=useNavigation()
   const levels=[
        {title:"Level One",number:1},
        {title:"Level two",number:2},
        {title:"Level three",number:3},
        {title:"Level Four",number:4}
]
    const setLevel=(level)=>{
        navigation.navigate("Assemble",{level})
    }
    return (
    <View style={styles.container}>
        {levels.map(level=><Button disabled={level.number>currentLevel?true:false}key={level.number} onPress={()=>setLevel(level)} title={level.title} style={{opacity:level.number>currentLevel?0.3:1}}/>)}
    </View>
)};
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        paddingHorizontal:19,
        alignItems:"center",
        justifyContent: 'center',
    },
})
export default NavPage;
