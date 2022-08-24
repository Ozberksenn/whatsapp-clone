import {View, Text} from 'react-native';
import React from 'react';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
const Chat = ({route}) => {
  const {firstName, photo} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ChatHeader firstName={firstName} photo={photo} />
      <ChatFooter />
    </View>
  );
};

export default Chat;
