import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'arial',
  },
  textInput: {
    marginBottom: 8,
    padding: 3,
    width: 125,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  funcao: {
    flexDirection: 'row',
    marginBottom: 8,
    padding: 3,
    borderRadius: 3,
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  resultado: {
    marginBottom: 8,
    padding: 3,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});