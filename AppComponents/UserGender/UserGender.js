import React, { Component } from 'react';
import {View, Picker, Text, Button} from 'react-native';

export default class UserGender extends Component {

state = {
  gender: '',
}

  render() {
    return (
      <View>
        <Text style={{alignItems: 'center', justifyContent: 'center',
        fontSize: 20, fontWeight: 'bold'}}>
          Now select your gender
        </Text>
        <Picker
          style={{alignItems: 'center', justifyContent: 'center'}}
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
