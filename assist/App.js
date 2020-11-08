// import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TopicGraph from './TopicGraph';
import TopicGraph2 from './TopicGraph2';
import StructureSummary from './StructureSummary';
import NucleusSummary from './NucleusSummary';

// const Stack = createStackNavigator();
export default function App() {

  return (
    // <TopicGraph/>
    // <TopicGraph2/>
    // <StructureSummary/>
    <NucleusSummary/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});