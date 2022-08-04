import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'
import Button from './Modelling/MyButton';
const Check = () => (
    <View style={styles.containerCheck}>
            <View style={{paddingBottom:25}}> 
             <Text style={styles.word}>improve</Text>
             <Text style={styles.def}> To make or become better in qualite</Text>
             
            </View>
                <LottieView source={require('./assets/12821-failed-attempt.json')} style={styles.lottie} autoPlay/>
                <View style={styles.btnView}> 
                    <Button onPress={()=>console.log('press me')}/>   
                </View>
    </View>
);
const styles = StyleSheet.create({
    btnView:{
        paddingTop:15
    },
    containerCheck:{
        paddingTop:"15%",
        paddingHorizontal:15
    },
    def:{
        fontStyle:"italic"
    },
    lottie:{
        width:200,
        height:300
    }, 
    word:{
        textTransform:"uppercase",
        color:"#08B92E",
        fontSize:34,
        paddingBottom:20
    }
})
export default Check;
