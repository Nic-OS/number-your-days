import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class SubmitButton extends Component {

render() {

  return(
    <View>
      <Button
        onPress={this.props.onPress}
        title="Submit"
      />
    </View>
  )
}
}
