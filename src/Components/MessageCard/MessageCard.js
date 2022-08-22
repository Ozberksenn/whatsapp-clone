import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './MessageCard.style';
import {useNavigation} from '@react-navigation/native';
const MessageCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        {/* Tıklanılan mesajlaşmaya gidilebilinecek. */}
        <View style={styles.imageContainer}>
          {/* imageContainer profil fotoğrafı ve textleri yan yana almak için oluşturuldu. */}
          <Image
            style={styles.profilPhoto}
            source={{
              uri: 'https://www.erenyapidekorasyon.com.tr/wp-content/uploads/2018/11/D-10.jpg',
            }}
          />
          <View>
            <Text style={styles.firstName}>First Name</Text>
            <Text style={styles.message}>Lorem İpsum Dolar Set Amoouu...</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageCard;
