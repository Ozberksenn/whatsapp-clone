import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ChatHeader.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const ChatHeader = ({firstName, photo}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.backIcon} name="arrow-left" />
        </TouchableOpacity>
        <Image style={styles.photo} source={{uri: photo}} />
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={styles.firstName}>{firstName}</Text>
        <Text style={styles.lastSeen}>Last Seen Today 11:00 AM</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginVertical: 15,
        }}>
        <Icon style={styles.icon} name="phone-outline" />
        <Icon style={styles.icon} name="paperclip" />
        <Icon style={styles.icon} name="dots-vertical" />
      </View>
    </View>
  );
};

export default ChatHeader;
