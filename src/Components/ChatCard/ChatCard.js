import {View, Text} from 'react-native';
import React from 'react';
import styles from './ChatCard.style';
const ChatCard = ({textData}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textData}</Text>
    </View>
  );
};

export default ChatCard;
