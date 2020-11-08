// SwipeCards.js
"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
  { text: "What is a chronotype?", backgroundColor: "cyan" },
  {
    text:
      "What are the two extremes with most individuals having some flexibility in the timing of their sleep period?",
    backgroundColor: "cyan",
  },
  { text: "what is a notable environmental cue?", backgroundColor: "cyan" },
  {
    text:
      "What is a factor that might be important in determining a person's chronotype?",
    backgroundColor: "cyan",
  },
  { text: "What are the circadian rhythms?", backgroundColor: "cyan" },
  {
    text: "What is the main thing that humans do during the day?",
    backgroundColor: "cyan",
  },
  { text: "What are clock genes called?", backgroundColor: "cyan" },
];

const testText =
  "A chronotype is the behavioral manifestation of underlying circadian rhythms of myriad physical processes. A person's chronotype is the propensity for the individual to sleep at a particular time during a 24-hour period. Eveningness (delayed sleep period) and morningness (advanced sleep period) are the two extremes with most individuals having some flexibility in the timing of their sleep period. However, across development there are changes in the propensity of the sleep period with pre-pubescent children preferring an advanced sleep period, adolescents preferring a delayed sleep period and many elderly preferring an advanced sleep period.\nThe causes and regulation of chronotypes, including developmental change, individual propensity for a specific chronotype, and flexible versus fixed chronotypes have yet to be determined. However, research is beginning to shed light on these questions, such as the relationship between age and chronotype.[1] There are candidate genes (called clock genes) that exist in most cells in the body and brain, referred to as the circadian system that regulate physiological phenomena (hormone levels, metabolic function, body temperature, cognitive faculties, and sleeping). With the exception of the most extreme and rigid chronotypes, regulation is likely due to gene-environment interactions. Important environmental cues (zeitgebers) include light, feeding, social behavior, and work and school schedules. Additional research has proposed an evolutionary link between chronotype and nighttime vigilance in ancestral societies.[2]\nHumans are normally diurnal creatures, that is to say they are active in the daytime. As with most other diurnal animals, human activity-rest patterns are endogenously controlled by biological clocks with a circadian (~24-hour) period. Chronotypes have also been investigated in other species, such as fruit flies[3] and mice.[4] ";

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
    // this.state.score += 1;
    console.log(`${this.state.score}`);
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    this.setState({ score: this.state.score - 1 });
    // this.state.score -= 1;
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
