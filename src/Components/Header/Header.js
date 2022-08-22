import {View, Text} from 'react-native';
import React from 'react';
import styles from './header.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WhatsApp</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name="magnify" />
        <Icon style={styles.icon} name="dots-vertical" />
      </View>
    </View>
  );
};

export default Header;
