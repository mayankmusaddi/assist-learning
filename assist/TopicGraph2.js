import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
};

const longClickedHandler = () => {
  console.log('Long Clicked button');
  // do something
};

export default class TopicGraph2 extends React.Component {
  render() {
    return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
        <Text>Structure</Text>
      </TouchableOpacity>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          onLongPress={longClickedHandler}
          style={styles.roundButton2}>
          <Text>Cell Membrane</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.roundButton2}>
          <Text>Cytoplasm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={buttonClickedHandler}
          onLongPress={longClickedHandler}
          style={styles.roundButton2}>
          <Text>Nucleus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
}

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  roundButton2: {
    marginTop: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
});