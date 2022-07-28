import React from 'react';
import { Text,StyleSheet } from 'react-native';

const MyText = ({children,style}) => <Text style={[styles.txt,style]}>{children}</Text>
const styles = StyleSheet.create({
    txt:{
        fontSize:18
    }
})
export default MyText;
