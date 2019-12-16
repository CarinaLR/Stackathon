import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, FlatList, Text } from 'react-native';

import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

class UserInfoScreen extends React.Component {
  constructor() {
    super();
  }
  // const [weightLossGoals, setWeightLossGoals] = useState([]);

  // const addGoalHandler = goalTitle => {
  //   setWeightLossGoals(currentGoals => [
  //     ...currentGoals,
  //     { key: Math.random().toString(), value: goalTitle },
  //   ]);
  // };

  // const removeGoalHandler = goalId => {
  //   setWeightLossGoals(currentGoals => {
  //     return currentGoals.filter(goal => goal.id !== goalId);
  //   });
  // };

  // if (__DEV__) {
  //   const learnMoreButton = (
  //     <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
  //       Learn more
  //     </Text>
  //   );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getmefit}>Get Me Fit!</Text>
        <Text style={styles.welcome}>
          Based on how much weight you would like to lose we can provide you a
          weekly meal plan that will help you to reach your goal!
        </Text>
        {learnMoreButton}
        <View style={styles.screen}>
          <GoalInput onAddGoal={addGoalHandler} />
          <FlatList
            keyExtractor={(item, index) => item.key}
            data={weightLossGoals}
            renderItem={itemData => (
              <GoalItem
                id={itemData.item.id}
                onDelete={removeGoalHandler}
                title={itemData.item.value}
              />
            )}
          />
        </View>
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

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://www.nhlbi.nih.gov/health/educational/lose_wt/eat/calories.htm'
  );
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
});
