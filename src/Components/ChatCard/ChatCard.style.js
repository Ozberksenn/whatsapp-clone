import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  textContainer: {
    maxWidth: 340,
  },
  text_dateTimeContainer: {
    elevation: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    marginRight: 'auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  text: {
    padding: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
  },
  dateTime: {
    marginRight: 10,
    top: -3,
    fontSize: 12,
  },
});
