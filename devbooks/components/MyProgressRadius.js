import React from 'react';
import { View,StyleSheet } from 'react-native';

const MyProgressRadius = ({rad}) => {

    const width=`${rad}%`
    return ( 
    <View style={{backgroundColor:'lightgrey',height:11,width:"100%",marginTop:23,borderRadius:3}}>
      <View style={{backgroundColor:'#90EE90',height:11,width:width,borderRadius:3}}></View>
    </View>
     );
}
 
export default MyProgressRadius;