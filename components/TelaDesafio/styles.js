import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  boxPergunta:{
    width:'90%',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"center"
  },
  pergunta: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  imagemPergunta: {
    maxHeight: 120,
    maxWidth: '100%',
    resizeMode: 'center',
    borderWidth: 1,
  },
  enunciado: {
    fontWeight: '600',
    fontSize: 18,
    width:'100%',
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
  },
  alt: {
    width: '100%',
    marginTop: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'rgb(255,95,85)',
    justifyContent:"center",
    alignItems:"center"
  },
  alt2: {
    width:'100%',
    color: '#fff',
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center"
  },
});
