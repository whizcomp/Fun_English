import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import MyProgressRadius from "../components/MyProgressRadius"
function Intro({rad}) {
    return (
    <View>
        <Text style={styles.txt}>Level One</Text>
        <MyProgressRadius rad={rad}/>
    </View>
    );
}
const styles = StyleSheet.create({
    txt:{
        fontSize:18
      }
})
export default Intro;


