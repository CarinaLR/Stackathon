import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { VictoryPie, VictoryLabel } from 'victory-native';
import Constants from 'expo-constants';

const data = [
  {
    x: 'active',
    y: 4,
  },
  {
    x: 'intermediate',
    y: 5,
  },
  {
    x: 'sedentary',
    y: 3,
  },
  {
    x: 'other',
    y: 88,
  },
];

class ReportScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> PERFORMANCE RESULTS </Text>
        <SafeAreaView style={styles.scrollContainer}>
          <ScrollView style={styles.scrollView}>
            <VictoryPie
              data={data}
              labels={({ datum }) => `${datum.x}: ${datum.y}%`}
              colorScale={['gold', '#B0E0E6', '#20B2AA', 'grey']}
              padding={{ left: 100, right: 100 }}
              style={{ labels: { fontSize: 10, fill: 'black' } }}
            />
          </ScrollView>
        </SafeAreaView>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            // onPress={() => this.props.navigation.navigate('Meal Plan')}
          >
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartContainer: {
    flex: 1,
    fontSize: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    marginBottom: 10,
    width: 300,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    opacity: 0.8,
  },
  data: {
    color: 'black',
    marginBottom: 5,
    width: 300,
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'left',
    opacity: 0.8,
  },
  buttonContainer: {
    backgroundColor: '#bdecb6',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  transcriptionText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  burger: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
});

export default ReportScreen;
