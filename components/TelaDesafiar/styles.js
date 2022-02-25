import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  caixaTexto: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1.5,
    width: '94%',
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'column',
  },
  btnSalmao: {
    paddingHorizontal: 12,
    padding: 3,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgb(255,95,85)',
    color: '#fff',
    textAlign: 'center',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  notLinha: {
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagem: {
    resizeMode: 'stretch',
    height: 40,
    width: 40,
    borderRadius: 60,
    borderWidth: 2,
    margin: 5,
  },
  textInput: {
    padding: 3,
    borderWidth: 2,
    margin: 5,
  },
  nickName: {
    fontSize: 13,
  },
  versus: {
    fontWeight: '700',
    marginLeft: 8,
    marginRight: 8,
  },
});