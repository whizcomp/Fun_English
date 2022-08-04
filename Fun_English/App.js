import React, { useState } from 'react';
import { View,StyleSheet} from 'react-native';
import Check from './Components/check';
import Quiz from './Components/quiz';
import { NavigationContainer } from '@react-navigation/native';

const App = () =>{ 
  const [words,setWords]=useState([{word:"improve",letters:"spaomriesemtbav",def:"To make or become better in quality"},{word:"impecable",letters:"pahaimacceabsle",def:"Having no flaws; perfect"},{word:"perfect",letters:"elpohsaiviaq",def:" large in quantity and expensive or impressive"}])
  const [wordIndex,setWordIndex]=useState(0)
  return (
    <NavigationContainer>
      <View style={styles.container}>
    <Quiz quiz={words[2].def} word={words[2].word} letters={words[2].letters}/>
    </View>
    </NavigationContainer>
    )}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10
  }
})
export default App;
