import React, { Component } from "react";
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class Calendars extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    submit = () => {
        this.props.navigation.navigate("Subject");
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Choose Exam Date
                </Text>
                </View>
                <Calendar
                    current={'2020-11-08'}
                    minDate={'2012-05-10'}
                    maxDate={'2021-05-30'}
                    onDayPress={(day) => { this.submit() }}
                />
            </SafeAreaView>

        );
    }
}
export default Calendars;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 25,
        fontSize: 25
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        width: '100%',
        paddingBottom: 10
    }
});