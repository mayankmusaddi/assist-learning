import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        text: ''
    }
    handleText = (text) => {
        this.setState({ text: text })
    }

    login = (text) => {
        this.props.navigation.navigate('Questions')
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Paste your content here!"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleText} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.text)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        textAlign: "center",
        margin: 15,
        height: 300,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        textAlign: "center",
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        alignSelf: "center",
        width: 80
    },
    submitButtonText: {
        color: 'white'
    }
})