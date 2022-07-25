import React from 'react';
import { Text, View,StyleSheet} from 'react-native';

const Title = ({title}) => (
    <View>
        <Text style={styles.quiz}>{title}</Text>
    </View>
);
const styles = StyleSheet.create({
    quiz:{
        paddingVertical:15
      },
})
export default Title;
