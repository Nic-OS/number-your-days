import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DaysLeft extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          TBD
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
