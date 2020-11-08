import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inputs from './input.js'
import Subjects from './chooseSubject';
import Chapters from './chooseChapter';
import Calendars from './calendar';
import TopicGraph from './TopicGraph';
import TopicGraph2 from './TopicGraph2';
import StructureSummary from './StructureSummary';
import NucleusSummary from './NucleusSummary';
import SwipeCards from './SwipeCards';
import FlashCards from './FlashCards';
import Methods from './chooseMethod.js';
import pushnotification from './pushnotification';

const Stack = createStackNavigator();
console.disableYellowBox = true;

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calendars"
          component={Calendars}
        />
        <Stack.Screen
          name="Subject"
          component={Subjects}
        />
        <Stack.Screen
          name="Chapter"
          component={Chapters}
        />
        <Stack.Screen
          name="Input"
          component={Inputs}
        />
        <Stack.Screen
          name="TopicGraph"
          component={TopicGraph}
        />
        <Stack.Screen
          name="TopicGraph2"
          component={TopicGraph2}
        />
        <Stack.Screen
          name="StructureSummary"
          component={StructureSummary}
        />
        <Stack.Screen
          name="NucleusSummary"
          component={NucleusSummary}
        />
        <Stack.Screen
          name="Methods"
          component={Methods}
        />
        <Stack.Screen
          name="SwipeCards"
          component={SwipeCards}
        />
        <Stack.Screen
          name="FlashCards"
          component={FlashCards}
        />
        <Stack.Screen
          name="Pushnotification"
          component={pushnotification}
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