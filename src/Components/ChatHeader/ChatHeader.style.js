import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#017a6b',
  },
  photo: {width: 45, height: 45, borderRadius: 50, marginTop: 2},
  firstName: {fontSize: 18, color: '#fff', marginLeft: 5},
  lastSeen: {fontSize: 14, color: '#7fbeba', marginLeft: 5},
  backIcon: {color: '#fff', fontSize: 25, fontWeight: '600'},
  icon: {color: '#fff', fontSize: 25, marginRight: 25},
});
