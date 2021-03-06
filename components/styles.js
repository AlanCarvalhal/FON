import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  viewTela: {
    flex: 1,
    padding: 5,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    fontFamily:"arial",
  },
  btnVoltar:{
    position:"absolute",
    zIndex:1,
    top:45,
    left:25,
  },
  btnMenu:{
    position:"absolute",
    zIndex:1,
    top:45,
    right:25,
  },
  btnIcon:{
    height:40,
    width:40,
    textAlign:"center",
    lineHeight:40,
  },
  bandeiraTouchable: {
    margin:5,
    fontSize:22,
    height:40,
    width:60,
    borderRadius:20,
    borderWidth:2,
    borderColor:"#000",
    overflow:"hidden",
    backgroundColor:"#000",
  },
  bandeiraImage:{
    height:"100%",
    width:"100%",
    resizeMode:"stretch",
  },
  tituloTela: {
    marginBottom:10,
    fontSize:28,
    fontWeight:"bold",
    fontFamily:"Comic Sans MS",
    color:"rgb(255,95,85)",
    textAlign:"center"
  },
  formInicial:{
    marginTop:20,
    width:"70%",
  },
  formInput:{
    marginBottom:8,
    padding:3,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    backgroundColor:"#fff",
    textAlign:"center",
  },
  btnSalmao:{
    padding:3,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    backgroundColor:"rgb(255,95,85)",
    color:"#fff",
    textAlign:"center",
    shadowOffset:{width:3,height:3},
    shadowOpacity:0.5,
    shadowRadius:3,
  },
  btnJogar:{
    marginTop:10,
    width:180,
  },
  btnCinza:{
    padding:3,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    backgroundColor:"#aaa",
  },
  btnTransparente:{
    marginTop:15,
    padding:3,
    color:"blue",
    fontSize:12,
  },
});