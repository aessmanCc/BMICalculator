import React, { Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000)

export default class App extends Component {
  state = {
    results: '',
    weight: '',
    height: '',
  };

  onTitleChange = (weight) => this.setState({ weight });
  onPostChange = (height) => this.setState({ height });

  onSave = () => {

  const { weight, height } = this.state; 
  let maths = (weight / (height * height)) *703;

  if(!isNaN(maths))
  {
    this.setState({ results: maths.toFixed(1)});
  }
 
  }

  render() {
    const { results, weight, height } = this.state;
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.toolbar}>BMI Calculator</Text>
        <ScrollView style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.onTitleChange}
            value={weight}
            placeholder="Weight in Pounds"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onPostChange}
            value={height}
            placeholder="Height in inches"
          />
          <TouchableOpacity onPress={this.onSave} style={styles.button}>
            <Text style={styles.buttonText}>Compute BMI</Text>
          </TouchableOpacity>
          {results !== "" ? <Text style={styles.bmi}>Body Mass Index is {(results)}</Text> : <Text style={styles.bmi}></Text>}
          <Text style={styles.contentTop}>Assessing Your BMI</Text>
          <Text style={styles.content}>Underweight: less than 18.5</Text>
          <Text style={styles.content}>Healthy: 18.5 to 24.9</Text>
          <Text style={styles.content}>Overweight: 25.0 to 29.9</Text>
          <Text style={styles.content}>Obese: 30.0 or higher</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#f4511e',
    color: '#fff',
    textAlign: 'center',
    padding: 25,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    fontSize: 20,
    marginLeft: 20,
  },
  contentTop: {
    flex: 1,
    fontSize: 20,
    paddingTop: 90,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
    fontSize: 24,
    marginRight: 15,

  },
  button: {
    backgroundColor: '#34495e',
    padding: 10,
    borderRadius: 3,
    marginBottom: 30,
    alignItems: 'center',
    marginRight: 15,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
  bmi: {
    paddingTop: 20,
    fontSize: 28,
    alignItems: 'center',
    marginLeft: 20,

  },

});