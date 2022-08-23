import {View, Text} from 'react-native';
import React from 'react';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
const Chat = ({route}) => {
  const {firstName, photo} = route.params;

  return (
    <View>
      <ChatHeader firstName={firstName} photo={photo} />
    </View>
  );
};

export default Chat;
