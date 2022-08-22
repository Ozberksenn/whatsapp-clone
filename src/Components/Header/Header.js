import {View, Text} from 'react-native';
import React from 'react';
import styles from './header.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title_iconContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>WhatsApp</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} name="magnify" />
          <Icon style={styles.icon} name="dots-vertical" />
        </View>
      </View>
      <View style={styles.footer}>
        <Icon
          style={{fontSize: 25, color: '#fff', marginLeft: 5}}
          name="camera"
        />
        <Text style={[styles.text, {color: '#fff'}]}>CHATS</Text>
        <Text style={styles.text}>STATUS</Text>
        <Text style={[styles.text, {marginRight: 20}]}>CALLS</Text>
      </View>
    </View>
  );
};

export default Header;
