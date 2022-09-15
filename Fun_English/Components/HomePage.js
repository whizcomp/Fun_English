import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,StyleSheet,Image, ImageBackground } from 'react-native';
import Button from './Modelling/MyButton';


const HomePage = () => {
    const navigation=useNavigation()
    return(
    <ImageBackground style={styles.bgStyle}source={require('../assets/background.png')} blurRadius={3}>
        <View style={styles.container}>
        <View style={styles.viewLogo}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
        </View>
        
        <View style={styles.bottomNav}>
            <Button  title="Continue" onPress={()=>navigation.navigate('NavPage')}/>
        </View>
    </View></ImageBackground>
)};
const styles = StyleSheet.create({
    bgStyle:{
        flex: 1,
    justifyContent: "center",
    },

    bottomNav:{
        paddingBottom:"15%"
    },
    container:{
        flex:1,
        paddingHorizontal:19,
    },
    logo:{
        width:'80%',
        height:200
    },
    viewLogo:{
        flex:1,
        alignItems:"center",
        padding:10,
        paddingTop:'35%'
    }
})
export default HomePage;
