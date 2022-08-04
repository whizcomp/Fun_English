import React from 'react';
import { Text, TouchableWithoutFeedback, View,StyleSheet } from 'react-native';

const Button = ({onPress}) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.title}>Press Me</Text>
        </View>
    </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
   container:{
    width:"100%",
    borderRadius:25,
    padding:13,
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center"
   } ,
   title:{
    textTransform:"uppercase",
    fontSize:18,
    color:"#FFF"
   }
})
export default Button;
