import React, { Component } from 'react'
import {StyleSheet, TextInput} from 'react-native'

export default class UserAge extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => {this.setState({text})}

  onSubmit = () => {
    const {onSubmit} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder, keyboardType} = this.props
    const {text} = this.state

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmit}
      />
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
