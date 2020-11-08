import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SwipeCards from './SwipeCards';
import Inputs from './input.js'
import Subjects from './chooseSubject';
import Chapters from './chooseChapter';
import Calendars from './calendar';

const Stack = createStackNavigator();
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
          name="Questions"
          component={SwipeCards}
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