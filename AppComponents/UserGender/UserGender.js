import React, { Component } from 'react';
import {View, Picker, Text} from 'react-native';

export default class UserGender extends Component {

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Picker
          selectedValue={this.state.gender}
          onValueChange={this.onValueChange}
          mode={'dropdown'}>
          <Picker.Item label="Please select gender" value={''} />
          <Picker.Item label="Female" value={0} />
          <Picker.Item label="Male" value={1} />
        </Picker>
      </View>
    )
  }
}
