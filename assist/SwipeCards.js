// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>Great! You have finished all the Questions</Text>
      </View>
    )
  }
}

const cards = [
  { text: '1', backgroundColor: 'cyan' },
  { text: '2', backgroundColor: 'cyan' },
  { text: '3', backgroundColor: 'cyan' },
  { text: '4', backgroundColor: 'cyan' },
  { text: '5', backgroundColor: 'cyan' },
  { text: '6', backgroundColor: 'cyan' },
  { text: '7', backgroundColor: 'cyan' },
  { text: '8', backgroundColor: 'cyan' },
  { text: '9', backgroundColor: 'cyan' },
]

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: cards,
      score: "0"
    };
  }

  handleYup(card) {
    this.state.score += 1
    console.log(`${this.state.score}`)
    console.log(`Yup for ${card.text}`)
  }
  handleNope(card) {
    this.state.score -= 1
    console.log(`Nope for ${card.text}`)
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`)
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
    alignItems: 'center',
    textAlign: 'center'
  },
  score:{
    paddingTop: 10,
    marginTop: 10,
  }
})