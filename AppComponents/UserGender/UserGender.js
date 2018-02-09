import React, { Component } from 'react';
import {Picker, Text} from 'react-native';

export default class UserGender extends Component {
static navigationOptions: {title: 'Set your Gender'};

state = {
  gender: '',
}

onValueChange = (itemValue) => {
  const {onValueChange} = this.props

  onValueChange(itemValue)
  this.setState({gender: itemValue});
}

  render() {
    return (
        <Picker
          selectedValue={this.state.gender}
          onValueChange={this.onValueChange}
          mode={'dropdown'}>
          <Picker.Item label="Please select gender" value={''} />
          <Picker.Item label="Female" value={0} />
          <Picker.Item label="Male" value={1} />
        </Picker>
    )
  }
}
