import {View, Text} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Header from '../../Components/Header/Header';
const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Home;
