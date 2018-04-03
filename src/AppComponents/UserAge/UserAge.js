import React, { Component } from 'react';
import { View, TextInput, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import { setUserAge } from '../../Redux/actions';

class UserAge extends Component {

  state = {age: ''}

  onChangeText = (age) => this.setState({age})

  onSubmit = () => {
  //setUserAge prop passes in the ActionCreator setUserAge, which updates global
  //state {age} by returning payload value equal to the value of the user input.
    const {setUserAge} = this.props
    const {age} = this.state

    if (!age) return

    setUserAge(age)
    this.setState({age})
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Please enter your age below.
        </Text>
        <TextInput
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

const mapStateToProps = state => {
  return {
    age: state.age
  };
}

// Anything returned from this function will end up as props in the UserAge component.
const mapDispatchToProps = dispatch => ({
  //Whenever setUserAge is called, the result should be passed to all reducers.
  setUserAge: value => dispatch(setUserAge(value))
})

// Promote UserAge from 'dumb' component to 'smart' container - it needs to know
// about the new dispatch method, setUserAge, and make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(UserAge);
