import React from 'react';
import {  View,StyleSheet } from 'react-native';
import Text from '../MyText';
import Box from './Modelling/Box';

const Quiz = ({quiz}) => {
    const word="improve";
    const wordArr=word.split("")
    console.log(wordArr)
    return(
    
    <View>
      <Text>Level one</Text>
      <Text style={styles.ask}>What word means:</Text>
      <Text style={styles.quiz}>{quiz}</Text>
      
      {wordArr.map(word=><Box lttr={word} />)}
    </View>
)};
const styles = StyleSheet.create({
    ask:{
        paddingTop:"5%",
        color:"#08B92E"
    },
    quiz:{
        paddingTop:"10%",
        fontSize:22,
        fontWeight:"bold"
    }
});
export default Quiz;
