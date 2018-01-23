import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DaysLeft extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.component5}>
          This will display the remaining days.
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 15,
      margin: 10,
      width: 400,
      height: 50,
      backgroundColor: 'whitesmoke',

  },
  component5: {
    fontSize: 20,
  },
})
