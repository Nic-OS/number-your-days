import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Text, Button} from 'react-native'
import { connect } from 'react-redux';
import { setUserAge } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserAge extends Component {

  state = {
    age: '',
  }

  onChangeText = (age) => {this.setState({age})}

  onSubmit = () => {
  //onSubmit prop passes in the ActionCreator setUserAge, which updates global
  //state {age} by returning payload value equal to the value of the user input.
    const {onSubmit} = this.props
    const {age} = this.state

    if (!age) return // Don't submit if empty

    onSubmit(age)
    this.setState({age})
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Please enter your age below.
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.age}
          placeholder='Enter age here:'
          keyboardType='numeric'
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

function mapStateToProps(state) {
  return {
    age: state.age
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({onSubmit: setUserAge}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAge);

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
