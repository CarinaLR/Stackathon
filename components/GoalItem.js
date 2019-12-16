import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.Input}>
        <Text style={styles.text}>
          I'm going to help you to reach your goal! Goal: {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // listGoals: {
  //   color: 'white',
  //   padding: 10,
  //   marginVertical: 10,
  //   backgroundColor: 'orange',
  //   borderColor: 'black',
  //   borderWidth: 1,
  // },
  text: {
    padding: 20,
    alignItems: 'center',
  },
  Input: {
    height: 60,
    backgroundColor: 'orange',
    opacity: 0.5,
    marginVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default GoalItem;
