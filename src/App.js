import {View, Text} from 'react-native';
import React from 'react';
import styles from './App.style';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default App;
