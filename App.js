import {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EvaluatorScreen from './tab/EvaluatorScreen'
import CreatorScreen from "./tab/CreatorScreen";
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
    const [count, setCount] = useState({evaluator:0, creator:0});
    const [creatorData, setCreatorData] = useState();
    const [evaluatorData, setEvaluatorData] = useState();

    const getData=()=>{
        const evaluator = require('./assets/evaluator-data.json');
        const creator = require('./assets/creator-data.json');
        setCreatorData(creator);
        setEvaluatorData(evaluator);
        setCount({evaluator:evaluator.length, creator:creator.length});
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>React Assignment</Text>
      <StatusBar style="auto" />
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={`EVALUATOR -${count.evaluator}`} component={()=> <EvaluatorScreen evaluator={evaluatorData}/>}/>
                <Tab.Screen name={`CREATOR -${count.creator}`} component={()=> <CreatorScreen  creator={creatorData}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}
