import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width:300,
    backgroundColor:"#c9c9c9",
    padding:15,
    borderRadius:5,
    borderWidth:1,
    justifyContent:"space-between",
    marginBottom:15
  },
  textInput: {
    marginBottom:8,
    padding:3,
    width:125,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    backgroundColor:"#fff",
    textAlign:"center",
  },
  funcao: {
    flexDirection: "row",
    marginBottom:8,
    padding:3,
    borderRadius:3,
    textAlign:"center",
    justifyContent:"flex-end",
  },
  resultado: {
    marginBottom:8,
    padding:3,
    width:125,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    backgroundColor:"#fff",
    textAlign:"center",
  },
  caixasTexto:{
    marginTop:10,
    alignItems:"flex-end"
  }
});