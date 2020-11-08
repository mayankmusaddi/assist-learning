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
        <Text style={styles.cardText}>{this.props.text}</Text>
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
          Great! You have finished all the FlashCards
        </Text>
      </View>
    );
  }
}

const cards = [

  { text: "The cell in a living organism is the basic structural unit.", backgroundColor: "cyan"},
  { text: "Organs are made up of tissues which are in turn made up of cells", backgroundColor: "cyan"},
  { text: "Organs perform different functions such as digestion, assimilation and absorption.", backgroundColor: "cyan"},
  { text: "Cell Membrane, Cytoplasm and Nucleus are key components of the Cell", backgroundColor: "cyan"},
  { text: "Nucleus are generally spherical and located in the centre of the cell", backgroundColor: "cyan"},
  { text: "Nucleus is the Control Centre of the activities in the cell and contains chromosomes", backgroundColor: "cyan"},
  { text: "Chromosome carry genes and help in inheritance", backgroundColor: "cyan"},
  { text: "Cytoplasm and Nucleus make up the entire content of a cell called protoplasm", backgroundColor: "cyan"},
];


export default class FlashCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      score: 0,
    };
  }

  handleYup(card) {
    this.setState({ score: this.state.score + 1 });
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    this.setState({ score: this.state.score - 1 });
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
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
    height: 500,
  },
  cardText: {
    fontSize : 30,
  },
  noMoreCardsText: {
    fontSize: 22,
    alignItems: "center",
    textAlign: "center",
  },
});
