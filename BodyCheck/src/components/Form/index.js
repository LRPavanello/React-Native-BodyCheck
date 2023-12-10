import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Vibration, } from "react-native";
import ResultImc from "../Form/ResultImc";
import styles from "./style";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [TextButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)


function imcCalculator(){
   let heightFormat = height.replace(',','.')
   return setImc((weight/(heightFormat*heightFormat)).toFixed(2))    
}   

function verificationImc(){
  if(imc == null){
    Vibration.vibrate();
   setErrorMessage("Campo Obrigatório") 
  }
}


function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu Imc é igual:")
    setTextButton("Calcular Novamente")
    setErrorMessage(null)
  }
  else{
   verificationImc() 
   setImc(null)
   setTextButton("Calcular")
   setMessageImc("Preencha o Peso e Altura")
  }
}

  return(
    <View style={styles.formContext}>
        <View style={styles.form}>
         <Text style={styles.formLabel}>Altura</Text>
         <Text style={styles.errorMessage}>{errorMessage}</Text>
         <TextInput 
         style={styles.input}
         onChangeText={setHeight}
         value={height} 
         placeholder="Ex: 1.75"
         keyboardType="numeric"
         />

         <Text style={styles.formLabel}>Peso</Text>
         <Text style={styles.errorMessage}>{errorMessage}</Text>
         <TextInput 
         style={styles.input} 
         onChangeText={setWeight}
         value={weight}  
         placeholder="Ex: 75.50"
         keyboardType="numeric"
         />
        
         <TouchableOpacity
         style={styles.buttonCalculator}
         onPress={() => validationImc()}>
         
          <Text style={styles.textbuttonCalculator}>{TextButton}</Text>

         </TouchableOpacity>
        </View>
        <ResultImc  messageResultImc={messageImc} resultImc={imc} />
    </View>
  );  
}