import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
      <View style={styles.listGoals}>
        <Text>
          I'm going to help you to reach your goal! Goal: {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listGoals: {
    color: 'white',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'orange',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
