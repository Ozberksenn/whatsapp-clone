import {View, Text} from 'react-native';
import React from 'react';
import styles from './ChatCard.style';
const ChatCard = ({textData, textData_two}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{textData}</Text>
      <Text style={styles.text}>{textData_two}</Text>
    </View>
  );
};

export default ChatCard;
