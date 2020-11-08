import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

class Subjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    submit = () => {
        this.props.navigation.navigate("Chapter");
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Choose Subject
                    </Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.button}>
                    <Button
                        title="Physics"
                        onPress={() => this.submit()}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Chemistry"
                        onPress={() => this.submit()}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Biology"
                        onPress={() => this.submit()}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Maths"
                        onPress={() => this.submit()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
export default Subjects;


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
        paddingBottom: 10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        width: '50%',
        paddingBottom: 10,
        alignSelf: 'center'
    }
});
