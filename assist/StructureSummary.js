import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StyledText from 'react-native-styled-text';

export default class StructureSummary extends React.Component {

  buttonClickedHandler = () => {
    this.props.navigation.navigate("TopicGraph");
  };

  render() {
    return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>
          Structure
      </Text>
      <StyledText style={styles.baseText}>
        {"Each Living Organism has many <b>Organs</b>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"<b>Organs</b> are further made up of small parts called <b>Tissues</b>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"<b>Tissue</b> is a group of similar <b>Cells</b> performing specific functions."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {" The <b>cell</b> in a living organism is the <b>basic structural unit</b>."}
      </StyledText>

      <StyledText style={styles.minorText}>
        {"Organs perform different functions such as digestion, assimilation and absorption."}
      </StyledText>

      <StyledText style={styles.minorText}>
        {"Organs of a plant perform specific/specialised functions like <b>roots help in the absorption of water and minerals</b> and <b>Leaves are responsible for synthesis of food</b>."}
      </StyledText>

      <TouchableOpacity
          onPress={()=>{this.buttonClickedHandler()}}
          style={styles.roundButton2}>
          <Text>Done</Text>
        </TouchableOpacity>

    </View>
  );
  }
}

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 15,
  },
  titleText: {
      fontSize: 30,
      fontWeight: "bold"
  },
  baseText: {
    fontSize: 20,
    margin: 10,
  },
  minorText: {
    fontSize: 17,
    margin: 10,
  },
  roundButton2: {
    marginTop: 20,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
});