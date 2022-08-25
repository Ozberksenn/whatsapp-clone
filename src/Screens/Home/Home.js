import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Header from '../../Components/Header/Header';
import MessageCard from '../../Components/MessageCard/MessageCard';
import data from '../../data.json';
const Home = () => {
  {
    /* uygulama çalıştığında gelen ilk ekran mesajlaşılan kişiler bu sayfada render edilecek. */
  }
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ItemSeparatorComponent={
          renderSeperator /* her bir card yapısının arasına çizgi ekler. */
        }
        keyExtractor={item => item.id}
        style={styles.card}
        data={data}
        renderItem={item => <MessageCard data={item} />}
      />
    </View>
  );
};

export default Home;
