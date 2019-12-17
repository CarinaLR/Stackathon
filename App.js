import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ReportScreen from './screens/ReportScreen';
import UserInfoScreen from './screens/UserInfoScreen';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <AppContainer style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: 5,
  },
});
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Report: ReportScreen,
    Info: UserInfoScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);
