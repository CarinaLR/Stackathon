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
              'https://assets.vancouverisawesome.com/wp-content/uploads/2017/12/31113259/shutterstock_749969473.jpg',
          }}
          style={{ width: 250, height: 250 }}
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
