import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function Word(){
  return(
    <View style={styles.boxTitle}>
       <Text style={styles.textTitle}>BodyCheck</Text>
    </View>
  );  
}