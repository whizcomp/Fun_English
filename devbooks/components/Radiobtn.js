import React from 'react';
import {View} from 'react-native'
import Text from './MyText';

const Radiobtn=({style,selected})=>(
      <View style={[{
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}>
        {
          selected ?
            <View style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: '#000',
            }}/>
            : null
        }
      </View>
)
export default Radiobtn;