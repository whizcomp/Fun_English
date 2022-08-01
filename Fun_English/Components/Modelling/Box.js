import React from 'react';
import { Text, View,StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Box = ({lttr,onPress}) => {
    
    return(
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.cover}>
            <Text style={{textTransform:"uppercase",fontWeight:"bold",fontSize:26}}>{lttr}</Text>
        </View>
    </TouchableWithoutFeedback>
)};
const styles = StyleSheet.create({
    cover:{
        width:40,
        height:40,
        backgroundColor:"#08B92E",
        justifyContent:"center",
        alignItems:"center",
        margin:5,
        padding:5,
        flexDirection:"row"
    }
})
export default Box;
