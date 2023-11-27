import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
 formContext: {
  flex:1,
  backgroundColor:"#ffffff",
  alignItems:"center",
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  paddingTop:30,
  marginTop:30,
 },
 form:{
  width:"100%",
  height:"auto",
  marginTop: 30,
  padding: 10,
 },
 formLabel:{
  color:"#000000",
  fontSize:18,
  paddingLeft:20,
  fontWeight:"Bold",
 },
 input:{
  width:"90%",
  borderRadius:50,
  backgroundColor:"#f6f6f6",
  heigth:40,
  margin:12,
  paddingLeft:10,
 },
 textbuttonCalculator:{
  fontSize:20,
  color: "#ffffff", 
  fontWeight:"Bold",
  fontFamily:"Lato"
 },
 buttonCalculator:{
  borderRadius:20, 
  justifyContent: "center", 
  alignItems:"center",
  widht:"90%",
  backgroundColor:"#4169E1",
  paddingTop:14,
  paddingBottom:14,
  marginLeft:12,
  margin:30,  
 },
 errorMessage:{
   fontSize:12,
   color:"red",
   fontWeight:"Bold",
   paddingLeft:20, 
 },
 exhibitionResult:{
  widht:"100%",
  height:"50%",
 },

});

export default styles