import React, { Component } from 'react';
import {View, Picker, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import {setUserGender} from '../../Redux/actions';

class UserGender extends Component {

state = {
  gender: '',
}

onValueChange = (itemValue) => {
  const {setUserGender} = this.props

  setUserGender(itemValue)
  this.setState({gender: itemValue})
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
          onValueChange={this.onValueChange}>
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

const mapStateToProps = state => ({
  gender: state.gender
})

const mapDispatchToProps = dispatch => ({
  //Whenever setUserAge is called, the result should be passed to all reducers.
  setUserGender: value => dispatch(setUserGender(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserGender);
