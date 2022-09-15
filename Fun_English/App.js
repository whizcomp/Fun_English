import React,{useEffect, useState} from 'react';
import Check from './Components/check';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assemble from './Components/Modelling/Assemble';
import { IndexContext } from './Components/context/indexContext';
import Wronged from './Components/wrong';
import NavPage from './Components/NavPage';
import { LevelContext } from './Components/context/levelContext';
import AddWords from './Components/AddWords';
import Toast from 'react-native-toast-message'
import HomePage from './Components/HomePage';
import { LimitContext } from './Components/context/LimitContext';
import { createTable } from './Components/api/localdb';
const App = () =>{
  useEffect(()=>{
    creatingLocalDb()
  },[])
  const creatingLocalDb=async()=>{
    console.log("creating table")
    console.log("...........");
    const res=await createTable();
    console.log(res)
    console.log("...........");
    console.log("...........");
  }
  const [ind,setInd]=useState(0);
  const [limitContext,setLimitContext]=useState(1)
  const [currentLevel,setCurrentLevel]=useState(1)
  const Stack = createNativeStackNavigator();
  
  return (
    
    <IndexContext.Provider value={{ind,setInd}}>
    <LevelContext.Provider value={{currentLevel,setCurrentLevel}}>
    <LimitContext.Provider value={{limitContext,setLimitContext}}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="NavPage" component={NavPage} />
        <Stack.Screen name="Assemble" component={Assemble} />
        <Stack.Screen name="Check" component={Check} />
        <Stack.Screen name="Wrong" component={Wronged} />
        <Stack.Screen name="NewWords" component={AddWords} />
      </Stack.Navigator>
      
      <Toast/>
    </NavigationContainer>
    </LimitContext.Provider>
    </LevelContext.Provider>
    
    </IndexContext.Provider>
    
    )}
export default App;
