import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 5,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 70,
    height: 60,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
  },
  input: {
    marginLeft: 40,
    fontSize: 16,
    fontWeight: '600',
  },
  iconSmile: {position: 'absolute', marginLeft: 10, fontSize: 25},
  iconPhoto: {position: 'absolute', right: 0, marginRight: 10, fontSize: 25},
  iconSend: {fontSize: 25, color: '#fff'},
  microphone: {
    elevation: 5,
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#02776a',
    borderRadius: 50,
    right: 0,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconMicrophone: {
    color: '#fff',
    fontSize: 25,
  },
});
