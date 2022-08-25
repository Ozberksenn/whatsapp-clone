import {View, TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';
import styles from './ChatFooter.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChatFooter = () => {
  const [value, setValue] =
    useState(
      0,
    ); /* bu state tanımını inputa bir değer girdiğimizde yanda ki mesajı gönderme icoununu değiştirmek için kullandık. Value değeri arttığında microphone iconu Send ikonuna dönüşüyor. */
  return (
    <View>
      <View style={styles.container}>
        <Icon style={styles.iconSmile} name="emoticon-happy-outline" />
        <TextInput
          style={styles.input}
          onChangeText={value => setValue(value)}
          placeholder="Type a message"
        />
        <Icon style={styles.iconPhoto} name="camera" />
      </View>
      <View style={styles.microphone}>
        {value.length > 0 ? (
          <Icon style={styles.iconSend} name="send" />
        ) : (
          <Icon style={styles.IconMicrophone} name="microphone" />
        )}
      </View>
    </View>
  );
};

export default ChatFooter;
