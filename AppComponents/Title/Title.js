import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-elements';

export default class Title extends Component {
  render() {

    return (
        <Text style={styles.title}>Number Your Days</Text>
    )
  }
}

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 30,
    },
  })
