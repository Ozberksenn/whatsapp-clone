import {View, ImageBackground} from 'react-native';
import React from 'react';
import styles from './Chat.style';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import ChatFooter from '../../Components/ChatFooter/ChatFooter';
import ChatCard from '../../Components/ChatCard/ChatCard';
const Chat = ({route}) => {
  const {firstName, photo, textData} = route.params;

  return (
    <ImageBackground
      source={{
        uri: 'https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png',
      }}
      style={styles.container}>
      <View>
        <ChatHeader firstName={firstName} photo={photo} />
        <ChatCard textData={textData} />
      </View>
      <View>
        <ChatFooter />
      </View>
    </ImageBackground>
  );
};

export default Chat;
