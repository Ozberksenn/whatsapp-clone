import {View, Text} from 'react-native';
import React from 'react';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
import ChatCard from '../../Components/ChatCard/ChatCard';
const Chat = ({route}) => {
  const {firstName, photo, textData} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ChatHeader firstName={firstName} photo={photo} />
      <ChatCard textData={textData} />
      <View>
        <ChatFooter />
      </View>
    </View>
  );
};

export default Chat;
