import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Text, Button} from 'react-native'

export default class UserAge extends Component {
  static navigationOptions: {title: 'Set your age'};

  state = {
    text: '',
  }

  onChangeText = (text) => {this.setState({text})}

  onSubmit = () => {
    //const {onSubmit} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    //onSubmit(text)
    this.setState({text})
  }

  render() {
    const {params} = this.props.navigation.state;
    const placeholder = params ? params.placeholder : null;
    const keyboardType = params ? params.keyboardType : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Number Your Days</Text>
        <Text>Please enter your age below.</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.onSubmit}
        />
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Gender')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    width: 150,
    fontSize: 15,
    justifyContent: 'center',
  },
})
