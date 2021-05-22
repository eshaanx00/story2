import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default class ReadStoryScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={{alignSelf:'center',marginTop:250}}>Read Story</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
