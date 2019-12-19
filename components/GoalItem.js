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
  text: {
    color: 'white',
    padding: 5,
    alignItems: 'center',
  },
  Input: {
    height: 30,
    backgroundColor: 'orange',
    opacity: 0.5,
    marginVertical: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default GoalItem;
