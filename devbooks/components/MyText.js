import React from 'react';
import { Text,StyleSheet } from 'react-native';
const MyText = ({children,style}) =><Text style={[styles.desc,style]}>{children}</Text>
 const styles = StyleSheet.create({
    desc:{
        fontSize:18,
        color:"black"
    }
 });
export default MyText;