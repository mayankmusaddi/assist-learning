// import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TopicGraph from './TopicGraph';
import TopicGraph2 from './TopicGraph2';
import StructureSummary from './StructureSummary';
import NucleusSummary from './NucleusSummary';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SwipeCards from './SwipeCards';
import FlashCards from './FlashCards';

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Questions"
          component={FlashCards}
        />
      </Stack.Navigator>
    </NavigationContainer>
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