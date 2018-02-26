import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

class DaysLeft extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          TBD
        </Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    daysLeft: state.daysLeft
  };
}

export default connect(mapStateToProps)(DaysLeft);
