import {View, Text} from 'react-native';
import React from 'react';
import styles from './ChatCard.style';
const ChatCard = ({textData}) => {
  return (
    <View style={styles.textContainer}>
      {textData &&
        textData.map((item, index) => (
          <View key={index} style={styles.text_dateTimeContainer}>
            <Text style={styles.text}>{item.text}</Text>
            <Text style={styles.dateTime}>{item.dateTime}</Text>
          </View>
        ))}
    </View>
  );
};

export default ChatCard;
