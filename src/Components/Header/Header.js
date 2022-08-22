import {View, Text} from 'react-native';
import React from 'react';
import styles from './header.style';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WhatsApp</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Header;
