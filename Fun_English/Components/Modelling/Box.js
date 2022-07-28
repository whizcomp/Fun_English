import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const Box = ({lttr}) => {
    
    return(
    <View style={styles.cover}>
        <Text style={{textTransform:"uppercase",fontWeight:"bold",fontSize:26}}>{lttr}</Text>
    </View>
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
