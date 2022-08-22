import {View, Text} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Header from '../../Components/Header/Header';
import MessageCard from '../../Components/MessageCard/MessageCard';
const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MessageCard />
    </View>
  );
};

export default Home;
