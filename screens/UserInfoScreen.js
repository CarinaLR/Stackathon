import React from 'react';
import { StyleSheet, View, Image, FlatList, Text, Button } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

class UserInfoScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getmefit}>Get Me Fit!</Text>
        <Button
          title="Continue"
          style={styles.continue}
          onPress={() => this.props.navigation.navigate('Report')}
        />
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          }}
          style={{ width: 350, height: 350 }}
        />
      </View>
    );
  }
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  getmefit: {
    padding: 30,
    fontSize: 50,
    textAlign: 'center',
    color: 'orange',
    margin: 10,
  },
  welcome: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  screen: {
    flex: 1,
    padding: 40,
    backgroundColor: 'grey',
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  continue: {
    color: '#B0C4DE',
    height: 15,
    borderRadius: 12,
    alignItems: 'flex-end',
    paddingBottom: 5,
    flex: 1,
  },
});
