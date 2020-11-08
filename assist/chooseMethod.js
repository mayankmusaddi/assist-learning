import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

class Methods extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    submit = (pageName) => {
        this.props.navigation.navigate(pageName);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Choose Method
                    </Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.button}>
                    <Button
                        title="Study"
                        onPress={() => this.submit("TopicGraph")}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Practise"
                        onPress={() => this.submit("SwipeCards")}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Revision"
                        onPress={() => this.submit("FlashCards")}
                    />
                </View>
               
            </SafeAreaView>
        );
    }
}
export default Methods;


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
