import React from 'react';
import { Text,StyleSheet } from 'react-native';
import colors from '../config/colors';

const MyText = ({children,style}) => <Text style={[styles.txt,style]}>{children}</Text>
const styles = StyleSheet.create({
    txt:{
        fontSize:18,
        color:colors.black
    }
})
export default MyText;
