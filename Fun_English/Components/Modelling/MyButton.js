import React from 'react';
import { Text, TouchableWithoutFeedback, View,StyleSheet } from 'react-native';

const Button = ({onPress,title="Next",style,disabled}) => (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
        <View style={[styles.container,style]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
   container:{
    width:"100%",
    borderRadius:25,
    padding:13,
    backgroundColor:"#08B92E",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10
   } ,
   title:{
    textTransform:"uppercase",
    fontSize:18,
    color:"#FFF"
   }
})
export default Button;
