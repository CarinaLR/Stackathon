import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

class UserInfoScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Text style={styles.getmefit}>Get Me Fit!</Text>
          <Text style={styles.welcome}>
            We need to know you better, give me a hi-five and start filling it
            out the form!
          </Text>
          <TouchableOpacity>
            <Icon name="hand" size={50} color="white" style={styles.hand} />
          </TouchableOpacity>
          <View>
            <Button
              title="Continue"
              style={styles.continue}
              onPress={() => this.props.navigation.navigate('Report')}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
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
    flex: 1,
    position: 'absolute',
    backgroundColor: '#C71585',
    paddingBottom: 30,
    marginBottom: 15,
    borderRadius: 5,
  },
  hand: {
    padding: 80,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
