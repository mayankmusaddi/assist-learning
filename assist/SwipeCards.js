// SwipeCards.js
"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import SwipeCards from "react-native-swipe-cards";
import Modal from 'react-native-modal';

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
  },
  { text: "Specify two organs in a plant and their functions", backgroundColor: "cyan" },
  {
    text:
      "What are the major components of the cell?",
    backgroundColor: "cyan",
  },
  { text: "Where is a nucleus located?", backgroundColor: "cyan" },
  {
    text: "What are the functions of a chromosome?",
    backgroundColor: "cyan",
  },
  { text: "What are the functions of a nuclues?", backgroundColor: "cyan" },
  { text: "What do we mean by protoplasm?", backgroundColor: "cyan" },
];


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      score: 0,
      answer : "",
      isModalVisible : false,
    };
  }

  handleYup(card) {
    this.setState({ score: this.state.score + 1 });
    // this.state.score += 1;
    console.log(`${this.state.score}`);
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    this.setState({ score: this.state.score - 1 });
    // this.state.score -= 1;
    console.log(`Nope for ${card.text}`);
    this.state.answer = card.answer;
    this.state.isModalVisible = true;
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
        <Modal 
          isVisible={this.state.isModalVisible}
          onSwipeComplete={() => this.state.isModalVisible = false}
          swipeDirection="left"
        >
          <View style={{ flex: 1 }}>
            <Text>{this.state.answer}</Text>
          </View>
        </Modal>
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
