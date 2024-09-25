import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [isCustom, setIsCustom] = useState(false);

  const toggleIsCustom = () => {
    setIsCustom(prevState => !prevState);
  };

  const styles = isCustom ? customStyles : defaultStyles;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isCustom ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to My App</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>This is a sample app to demonstrate style toggling.</Text>
          <Button title="Toggle Style" onPress={toggleIsCustom} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  body: {
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

const customStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  scrollView: {
    backgroundColor: '#333',
  },
  header: {
    backgroundColor: '#ff6347',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  body: {
    backgroundColor: '#444',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
