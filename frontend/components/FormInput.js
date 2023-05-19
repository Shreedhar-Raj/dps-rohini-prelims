
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FormInput = (props) => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.container}>
        <View >
        <TextInput placeholderTextColor='gray' selectionColor='white'
        placeholder={props.placeholder} styles={styles.input} />
        </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default FormInput

const styles = StyleSheet.create({
    input: {
        color: 'white',
        placeHolderTextColor: "#FFF",
        textColor: '#FFF'
    },
    container: {
        backgroundColor: '#000',
        padding: 15,
        color: "#FFFF",
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