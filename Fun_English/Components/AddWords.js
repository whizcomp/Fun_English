import React, { useState } from 'react';
import { Text, View,StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { sendWord } from './api/listings';
import Button from './Modelling/MyButton';
import Toast from 'react-native-toast-message';

const AddWords = () =>{
    const [word, onChangeWord] = React.useState("");
    const [def, onChangeDef] = React.useState("");
    const [letters, onChangeLetters] = React.useState("");
    const submitWord=()=>{
        if(word.length<=9){
            
            if(def.length>10){
                if(letters.length>word.length){
                    callServer()
                }
                else {
                    console.log("fill in the blank")
                }
            }
        }
    }
    // const showToast=()=> ToastAndroid.show(`Added ${word} successfully`,ToastAndroid.SHORT)
    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Awesome',
          text2: `${word} added successfully👋`,
          visibilityTime:8000
        });
      }
   const callServer=async()=>{
        const {data}=await sendWord(def,letters,word,1)
        if(data.affectedRows>=0){
            showToast()
            reset();
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Failed',
                text2: `error in adding`,
                visibilityTime:8000
              });
        }

       function reset() {
           onChangeWord("");
           onChangeDef("");
           onChangeLetters("");
       }
    }

    return(
    <View style={styles.container}>
        <Text style={styles.txt}>Add a new Word</Text>
        <TextInput value={word} style={styles.txtInput} maxLength={8}placeholder="Enter the puzzle word" onChangeText={onChangeWord}/>
        <TextInput value={def} placeholder=" Enter the definition" style={styles.txtInput} multiline={true} onChangeText={onChangeDef}/>
        <TextInput value={letters} placeholder=" Enter the letters for selecting"style={styles.txtInput}  multiline={true} maxLength={20}  onChangeText={onChangeLetters}/>
        <Button title='Submit Word' onPress={submitWord}/>
    </View>
)};
const styles = StyleSheet.create({
    container:{
        padding:25
    },
    txt:{
        color:"blue",
        paddingVertical:15,
        fontSize:18,
        textAlign:"center"
    },
    txtInput:{
       padding:13,
       marginVertical:10,
       margin:10,
       borderRadius:25,
       width:"100%",
       backgroundColor:"#F1ECEB",
       marginHorizontal:3 
    }
})
export default AddWords;
