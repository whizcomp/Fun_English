import React from 'react';
import {  View } from 'react-native';
import Intro from './Intro';
import Title from './Title';
import PickOne from './PickOne';

function QuizOne({rad,title}) {
    return (
    <View>
      <Intro rad={25}/>  
      <Title title="Who sang the song below"/>
      <PickOne/>
    </View>
    );
}

export default QuizOne;

