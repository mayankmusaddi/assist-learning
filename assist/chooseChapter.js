import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, CheckBox } from 'react-native';

class Chapters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
        };
    }

    submit = () => {
        this.props.navigation.navigate("Methods");
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Choose Chapter
                    </Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.checkbox}>
                    <CheckBox
                        value={this.state.checked1}
                        onValueChange={() => this.setState({ checked1: !this.state.checked1 })}
                    />
                    <Text style={{ marginTop: 5 }}> Chapter 1</Text>
                </View>
                <View style={styles.checkbox}>
                    <CheckBox
                        value={this.state.checked2}
                        onValueChange={() => this.setState({ checked2: !this.state.checked2 })}
                    />
                    <Text style={{ marginTop: 5 }}> Chapter 2</Text>
                </View>
                <View style={styles.checkbox}>
                    <CheckBox
                        value={this.state.checked3}
                        onValueChange={() => this.setState({ checked3: !this.state.checked3 })}
                    />
                    <Text style={{ marginTop: 5 }}> Chapter 3</Text>
                </View>
                <View style={styles.checkbox}>
                    <CheckBox
                        value={this.state.checked4}
                        onValueChange={() => this.setState({ checked4: !this.state.checked4 })}
                    />
                    <Text style={{ marginTop: 5 }}> Chapter 4</Text>
                </View>
                <View style={styles.fixToText}>
                    <Button
                        title="Start Preparation"
                        onPress={() => this.submit()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
export default Chapters;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 25
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        width: '100%',
        paddingBottom: 10
    },
    checkbox: {
        flexDirection: 'row', 
        justifyContent: 'center' 
    }
});
