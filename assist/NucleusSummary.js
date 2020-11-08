import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StyledText from 'react-native-styled-text';

const buttonClickedHandler = () => {
  console.log('You have been clicked a button!');
  // do something
};

export default class NucleusSummary extends React.Component {
  render() {
    return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>
          Nucleus
      </Text>
      <StyledText style={styles.baseText}>
        {"Generally <b>spherical</b> and located in the <b>centre of the cell</b>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"A porous <b>Nuclear Membrane</b> separates nucleus from <u>cytoplasm</u>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"<b>Nucleus</b> contains  thread-like  structures  called <b>chromosomes</b>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"<b>Chromosomes</b> carry genes and help in <b>inheritance (transfer of characters from the parents to the offspring)</b>."}
      </StyledText>
      <StyledText style={styles.baseText}>
        {"It is <b>control centre</b> of the activities of the cell."}
      </StyledText>

      <StyledText style={styles.minorText}>
        {"The entire content of a living cell is known as protoplasm composed of <b>cytoplasm and nucleus</b>"}
      </StyledText>

      <TouchableOpacity
          onPress={buttonClickedHandler}
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
    padding: 50,
    marginTop: 70,
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