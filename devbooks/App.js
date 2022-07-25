import React from 'react';
import {View,StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';
import QuizOne from './prog/QuizOne';
const App = () =>{
  return(
  <View style={styles.container}>
   <QuizOne/>
  </View>
  )};
const styles = StyleSheet.create({
  
  container:{
    paddingTop:10,
    paddingHorizontal:15
  },
  
  
  
});

export default App;