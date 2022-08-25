import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#085e55',
    justifyContent: 'space-between',
  },
  title_iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginVertical: 20,
    marginHorizontal: 15,
    fontSize: 34,
    color: '#fff',
    fontWeight: '500',
  },
  iconContainer: {
    marginVertical: 35,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
    fontSize: 30,
    color: '#fff',
  },
  iconCamera: {fontSize: 25, color: '#fff', marginLeft: 5},
  footer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    marginBottom: 10,
    fontWeight: '400',
    fontSize: 20,
    color: '#589794',
  },
});
