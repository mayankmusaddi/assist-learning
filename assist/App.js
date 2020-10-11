import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SwipeCards from './SwipeCards';
import Inputs from './input.js'

const Stack = createStackNavigator();
export default function App() {

  return (
    // <View style={styles.container}>
    //   <Inputs/>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <SwipeCards style={{ flex: 1 }} /> */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
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