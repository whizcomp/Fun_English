import React,{useState} from 'react';
import Check from './Components/check';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assemble from './Components/Modelling/Assemble';
import { IndexContext } from './Components/context/indexContext';

const App = () =>{
  const [ind,setInd]=useState(0);
  
  const Stack = createNativeStackNavigator();
  return (
    <IndexContext.Provider value={{ind,setInd}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Assemble" component={Assemble} />
        <Stack.Screen name="Check" component={Check} />

      </Stack.Navigator>
    </NavigationContainer>
    </IndexContext.Provider>
    )}

export default App;
