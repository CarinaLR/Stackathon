import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [weightLossGoals, setWeightLossGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setWeightLossGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={weightLossGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log('item deleted')}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: 'grey',
  },
});
