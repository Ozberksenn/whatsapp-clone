import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './Home.style';
import Header from '../../Components/Header/Header';
import MessageCard from '../../Components/MessageCard/MessageCard';
import data from '../../data.json';
const Home = () => {
  const renderSeperator = () => <View style={styles.seperator} />;
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        ItemSeparatorComponent={
          renderSeperator /* her bir card yapısının arasına çizgi ekler. */
        }
        style={styles.card}
        data={data}
        renderItem={item => <MessageCard data={item} />}
      />
    </View>
  );
};

export default Home;
