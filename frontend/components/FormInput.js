
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FormInput = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.inputContainer}>
        <View >
        <TextInput color="white" secureTextEntry={props.password} placeholderTextColor='gray' textColor="white" selectionColor='white'
        placeholder={props.placeholder} styles={styles.input} />
        </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default FormInput

const styles = StyleSheet.create({
    input: {
        color: 'white'
    },
    inputContainer: {
        backgroundColor: '#000',
        padding: 15,
        color: "white",
        margin: 5,
        borderRadius: 20,
        width: 300,
        shadowColor: '#A91FFF',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.9,
        shadowRadius: 6,
        borderWidth: 0.5,
        borderColor: "#A91FFf",
        borderRadius: 10,
    }
})