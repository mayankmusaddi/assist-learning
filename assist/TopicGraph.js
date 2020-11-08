import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class TopicGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  buttonClickedHandler = () => {
    this.props.navigation.navigate("TopicGraph2");
  };
  
  longClickedHandler = () => {
    this.props.navigation.navigate("StructureSummary");
  
  };

  render() {
    return (
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={()=>{this.buttonClickedHandler()}}
          style={styles.roundButton1}>
          <Text>Cell</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={()=>{this.buttonClickedHandler()}}
            style={styles.roundButton2}>
            <Text>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{this.buttonClickedHandler()}}
            onLongPress={()=>{this.longClickedHandler()}}
            style={styles.roundButton2}>
            <Text>Structure</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{this.buttonClickedHandler()}}
            style={styles.roundButton2}>
            <Text>Functions</Text>
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