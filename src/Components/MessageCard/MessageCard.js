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
            firstName: data.item.receiver[0].firstName,
            photo: data.item.receiver[0].photo,
            textData: data.item.messages,
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
            <Text numberOfLines={1} style={styles.message}>
              {/* numberOfLines kullanmamızın sebebi eğer mesaç çok uzunsa sonuna üç nokta ekler. */}
              {data.item.messages[data.item.messages.length - 1].text}
              {/* Ana ekranda listelenen mesajların data içerisinde ki son mesajı listelemesi için length-1 kullandık. */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageCard;
