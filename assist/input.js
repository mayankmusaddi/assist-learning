import React, { Component } from "react";
import SERVER_URL from "./url.js";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",

      squashId: null,
      settings: {
        top_p: 0.9,
        gen_frac: 0.5,
        spec_frac: 0.5,
      },
      ans_mode: "original",
      forest: null,
      queue_number: null,
      input_text: null,
      status: null,
      expanded: null,
      dropdownOpen: false,
    };
  }

  handleText = (text) => {
    this.setState({ text: text });
  };

  getSquashedDocument() {
    if (this.state.squashId) {
      var url = SERVER_URL + "/get_squash_doc?id=" + this.state.squashId;
      console.log(this.state.squashId);

      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            // if (result.input_text) {
            //   document.getElementById("squashInputText").value =
            //     result.input_text;
            // }
            // var expanded = null;
            // if (result.squash_data != null) {
            //   expanded = result.squash_data.qa_tree.map((para, para_index) =>
            //     para.binned_qas.map((qa_tree, qa_index) => false)
            //   );
            // }
            // this.setState({
            //   forest: result.squash_data,
            //   queue_number: result.queue_number,
            //   settings: {
            //     top_p: result.settings.top_p,
            //     gen_frac: result.settings.gen_frac,
            //     spec_frac: result.settings.spec_frac,
            //   },
            //   status: result.status,
            //   expanded: expanded,
            // });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  squashDoc(text) {
    var url = SERVER_URL + "/request_squash_doc";
    var flags = {
      method: "POST",
      body: JSON.stringify({
        settings: this.state.settings,
        input_text: text,
      }),
    };
    fetch(url, flags)
      .then((res) => res.json())
      .then(
        (result) => {
          //   window.location.href = "/?id=" + result.new_id;
          console.log(result.new_id);
          this.setState({ squashId: result.new_id });
          this.getSquashedDocument.bind(this)();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  submit = (text) => {
    // this.squashDoc(text);
    this.props.navigation.navigate("Questions");
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Paste your content here!"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          multiline={true}
          onChangeText={this.handleText}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.submit(this.state.text)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    textAlign: "center",
    padding: 20,
    margin: 15,
    height: 300,
    width: 300,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    textAlign: "center",
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    alignSelf: "center",
    width: 80,
  },
  submitButtonText: {
    color: "white",
  },
});
