import React, { Component } from 'react';
import {View, Picker, Text, Button} from 'react-native';

export default class UserGender extends Component {
static navigationOptions: {title: 'Set your Gender'};

state = {
  gender: '',
}

/*onValueChange = (itemValue) => {
  const {onValueChange} = this.props

  onValueChange(itemValue)
  this.setState({gender: itemValue});
}*/

  render() {
    return (
      <View>
        <Text>Now select your gender</Text>
        <Picker
          selectedValue={this.state.gender}
          onValueChange={(itemValue) => this.setState({gender: itemValue})}
          mode={'dropdown'}>
          <Picker.Item label="Please select gender" value={''} />
          <Picker.Item label="Female" value={0} />
          <Picker.Item label="Male" value={1} />
        </Picker>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Country')}
        />
      </View>
    )
  }
}
