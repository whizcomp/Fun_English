import React from 'react';
import { Text, View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';

const Box = ({lttr,onPress,style}) => {
    
    return(
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.cover,style]}>
            <Text style={styles.txt}>{lttr}</Text>
        </View>
    </TouchableWithoutFeedback>
)};
const styles = StyleSheet.create({
    cover:{
        width:40,
        height:40,
        backgroundColor:colors.primary,
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        padding:5,
        flexDirection:"row"
    },
    txt:{
        textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:24
    }
})
export default Box;
