// SwipeCards.js
"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import SwipeCards from "react-native-swipe-cards";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[styles.card, { backgroundColor: this.props.backgroundColor }]}
      >
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>
          Great! You have finished all the Questions
        </Text>
      </View>
    );
  }
}

const cards = [

  { text: "What is a cell?", backgroundColor: "cyan", answer : " The cell in a living organism is the basic structural unit." },
  {
    text:
      "What is the relation between Tissues, Organ and Cell?",
    backgroundColor: "cyan",
    answer: "Organs are made up of tissues which are in turn made up of cells"
  },
  { text: "Specify two organs in a plant and their functions", backgroundColor: "cyan" , answer : "Roots for absoption of water and Leaves for synthesis of food"},
  {
    text:
      "What are the major components of the cell?",
    backgroundColor: "cyan",
    answer: "Cell Membrane, Cytoplasm and Nucleus"
  },
  { text: "Where is a nucleus located?", backgroundColor: "cyan" , answer : "Centre of the cell"},
  {
    text: "What are the functions of a chromosome?",
    backgroundColor: "cyan",
    answer : "Carrying genes and help in inheritance"
  },
  { text: "What are the functions of a nuclues?", backgroundColor: "cyan" , answer : "Control Centre of the activities in the cell and contains chromosomes"},
  { text: "What do we mean by protoplasm?", backgroundColor: "cyan" , answer : "Cytoplasm and Nucleus make up the entire content of a cell called protoplasm"},
];


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      score: 0,
    };
  }

  handleYup(card) {
    this.setState({ score: this.state.score + 1 });
    console.log(`${this.state.score}`);
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    this.setState({ score: this.state.score - 1 });
    console.log(`Nope for ${card.text}`);

    // this.state.answer = card.answer;
    // this.state.isModalVisible = true;
    Alert.alert("Answer",card.answer);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
    Alert.alert("Answer",card.answer);

  }
  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup.bind(this)}
          handleNope={this.handleNope.bind(this)}
          handleMaybe={this.handleMaybe.bind(this)}
          hasMaybeAction
        />
        <Text style={styles.score}>SCORE IS {this.state.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    padding: 30,
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
  },
  score: {
    fontSize: 20,
    paddingTop: 10,
    marginTop: 10,
  },
});
