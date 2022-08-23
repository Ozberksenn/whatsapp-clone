import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MessageCard.style';
import {useNavigation} from '@react-navigation/native';

const MessageCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Chat', {
            itemId: data.item.id,
            firstName: data.item.receiver[0].firstName,
            photo: data.item.receiver[0].photo,
          })
        }>
        {/* Tıklanılan mesajlaşmaya gidilebilinecek. */}
        <View style={styles.imageContainer}>
          {/* imageContainer profil fotoğrafı ve textleri yan yana almak için oluşturuldu. */}
          <Image
            style={styles.profilPhoto}
            source={{uri: data.item.receiver[0].photo}}
          />
          <View>
            <Text style={styles.firstName}>
              {data.item.receiver[0].firstName}
            </Text>
            <Text style={styles.message}>{data.item.messages.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageCard;
