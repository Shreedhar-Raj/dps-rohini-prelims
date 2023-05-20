import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity, SafeAreaView} from 'react-native';

const Button = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
      flex: 1.4,
      justifyContent: 'flex-start',
      backgroundColor: '#000',
    },
  
    buttonContainer: {
      backgroundColor: '#000',
      padding: 15,
      margin: 5,
      borderRadius: 20,
      alignItems: 'center',
      width: 150,
      shadowColor: '#A91FFF',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.9,
      shadowRadius: 6,
      borderWidth: 0.5,
      borderColor: "#A91FFf",
      borderRadius: 50,
    },
  
    textStyle: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
 });