import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Text, Button} from 'react-native'
import { connect } from 'react-redux';
import { setUserAge } from '../actions/index';
import { bindActionCreators } from 'redux';

class UserAge extends Component {

  onChangeText = (age) => this.props.setUserAge(age)

  onSubmit = () => {
  //setUserAge prop passes in the ActionCreator setUserAge, which updates global
  //state {age} by returning payload value equal to the value of the user input.
    const {setUserAge} = this.props

    if (!this.props.age) return // Don't submit if empty

    setUserAge(age)
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Please enter your age below.
        </Text>
        <TextInput
          style={styles.input}
          value={this.props.age}
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

// Anything returned from this function will end up as props in the UserAge component.
function mapDispatchToProps(dispatch) {
  //Whenever setUserAge is called, the result should be passed to all reducers.
  return bindActionCreators({setUserAge: setUserAge}, dispatch)
}

// Promote UserAge from 'dumb' component to 'smart' container - it needs to know
// about the new dispatch method, setUserAge, and make it available as a prop.
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
