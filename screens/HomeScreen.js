// import React, { useState } from 'react';
// import { StyleSheet, View, Image, Button, FlatList, Text } from 'react-native';

// import GoalItem from '../components/GoalItem';
// import GoalInput from '../components/GoalInput';
// import UserInfoScreen from './UserInfoScreen';

// export default function HomeScreen() {
//   const [weightLossGoals, setWeightLossGoals] = useState([]);

//   const addGoalHandler = goalTitle => {
//     setWeightLossGoals(currentGoals => [
//       ...currentGoals,
//       { key: Math.random().toString(), value: goalTitle },
//     ]);
//   };

//   const removeGoalHandler = goalId => {
//     setWeightLossGoals(currentGoals => {
//       return currentGoals.filter(goal => goal.id !== goalId);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.getmefit}>Get Me Fit!</Text>
//       </View>
//       <Text style={styles.welcome}>
//         Based on how much weight you would like to lose we can provide you a
//         weekly meal plan that will help you to reach your goal!
//       </Text>
//       <View style={styles.yourGoal}>
//         <GoalInput onAddGoal={addGoalHandler} onResetGoal={removeGoalHandler} />
//         <FlatList
//           keyExtractor={(item, index) => item.key}
//           data={weightLossGoals}
//           renderItem={itemData => (
//             <GoalItem
//               id={itemData.item.id}
//               onDelete={removeGoalHandler}
//               title={itemData.item.value}
//             />
//           )}
//         />
//       </View>
//       <View style={styles.startButton}>
//         <Button title="Start" />
//       </View>
//       <Image
//         source={{
//           uri:
//             'https://assets.vancouverisawesome.com/wp-content/uploads/2017/12/31113259/shutterstock_749969473.jpg',
//         }}
//         style={{ width: 250, height: 250, marginBottom: 15 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   header: {
//     width: '100%',
//     height: 90,
//     paddingTop: 13,
//     backgroundColor: 'black',
//   },
//   getmefit: {
//     // padding: 30,
//     fontSize: 50,
//     textAlign: 'center',
//     color: 'orange',
//     margin: 10,
//   },
//   welcome: {
//     padding: 10,
//     color: 'white',
//     fontSize: 20,
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   yourGoal: {
//     flex: 1,
//     padding: 40,
//     backgroundColor: 'grey',
//   },
//   startButton: {
//     padding: 10,
//     alignItems: 'center',
//   },
// });
