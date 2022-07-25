import React from 'react';
import { StyleSheet,View,TouchableWithoutFeedback} from 'react-native';
import MyText from './MyText';
import Radiobtn from './Radiobtn';

const RadioView = ({selected,name,onPress}) => {
    return ( 
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <Radiobtn selected={selected}/>
            <MyText style={styles.txt}>{name}</MyText>
        </View>
        </TouchableWithoutFeedback>
    );
}
 const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        paddingVertical:10
    },
    txt:{
        paddingLeft:13
    }
 });
export default RadioView;