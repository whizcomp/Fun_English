import React,{useState} from 'react';
import Check from './Components/check';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assemble from './Components/Modelling/Assemble';
import { IndexContext } from './Components/context/indexContext';
import Wronged from './Components/wrong';
import NavPage from './Components/NavPage';
import { LevelContext } from './Components/context/levelContext';

const App = () =>{
  const [ind,setInd]=useState(0);
  const [currentLevel,setCurrentLevel]=useState(1)
  const Stack = createNativeStackNavigator();
  return (
    <IndexContext.Provider value={{ind,setInd}}>
      <LevelContext.Provider value={{currentLevel,setCurrentLevel}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NavPage" component={NavPage} />
        <Stack.Screen name="Assemble" component={Assemble} />
        <Stack.Screen name="Check" component={Check} />
        <Stack.Screen name="Wrong" component={Wronged} />
      </Stack.Navigator>
    </NavigationContainer>
    </LevelContext.Provider>
    </IndexContext.Provider>
    )}

export default App;
