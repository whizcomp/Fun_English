import React from 'react';
import { View,StyleSheet} from 'react-native';
import Quiz from './Components/quiz';
import Text from './MyText';

const App = () => (
    <View style={styles.container}>
        <Quiz quiz=" To make or become better in quality" word="improve"/>
    </View>
);
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10
  }
})
export default App;
