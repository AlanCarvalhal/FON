import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titulo: {
    margin: 6,
    fontSize: 17,
    fontWeight: 'bold',
  },
  caixaTexto: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    width: '90%',
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'column',
  },
  imagem: {
    resizeMode: 'cover',
    height: 90,
    width: 90,
    borderRadius: 60,
    borderWidth: 2,    
  },
  leftNegri: {
    width: '90%',
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,    
  },
  botao: {
    left: 58,
    bottom: 25,
  },
});