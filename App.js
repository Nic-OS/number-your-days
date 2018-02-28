import React, { Component } from 'react';

import {Card} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';

import Welcome from './AppComponents/Welcome/Welcome';
import UserAge from './AppComponents/UserAge/UserAge';
import UserGender from './AppComponents/UserGender/UserGender';
import UserCountry from './AppComponents/UserCountry/UserCountry';
import DaysLeft from './AppComponents/DaysLeft/DaysLeft';

export default class App extends Component {

render() {

  const RootNavigator = StackNavigator({
      WelcomeScreen: {
        screen: Welcome,
      },
      Age: {
        screen: UserAge,
      },
      Gender: {
        screen: UserGender,
      },
      Country: {
        screen: UserCountry,
      },
      Days: {
        screen: DaysLeft,
      },
  },
{
    initialRouteName:  'WelcomeScreen',
    navigationOptions: {
      title: 'Number Your Days',
      headerStyle: {
        backgroundColor: 'skyblue',
      },
      headerTintColor: '',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
});

  return <RootNavigator />;
  }
}
