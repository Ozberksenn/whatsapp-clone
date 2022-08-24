import {View, Text, TextInput, Dimensions} from 'react-native';
import React from 'react';
import styles from './ChatFooter.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChatFooter = () => {
  return (
    <View>
      <View style={styles.container}>
        <Icon style={styles.iconSmile} name="emoticon-happy-outline" />
        <TextInput style={styles.input} placeholder="Type a message" />
        <Icon style={styles.iconPhoto} name="camera" />
      </View>
      <View style={styles.microphone}>
        <Icon style={{color: '#fff', fontSize: 25}} name="microphone" />
      </View>
    </View>
  );
};

export default ChatFooter;
