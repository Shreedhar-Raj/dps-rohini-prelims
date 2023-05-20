import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput'
import MiniHeading from '../components/MiniHeading'
import Button from '../components/Button'
import Title from '../components/Title'
import MiniText from '../components/MiniText'

const Login = () => {
  return (
    <SafeAreaView>
            <Title style={styles.title} text="Login" />
            <View style={styles.everything}>
                <MiniHeading style={styles.mdtext} text="Email" />
                <FormInput placeholder="example@email.com" />
            </View>
            <View style={styles.everything}>
                <MiniHeading text="Password" />
                <FormInput password={true} placeholder="yoursupersecretpassword" />
            </View>
            <MiniText text="Don't have an account? Register here!" />
            <View style={styles.buttonContainer}>
                <Text style={styles.textStyle}>Login</Text>
            </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    everything: {
        paddingTop: 30,
    },
    inbetween: {
        paddingTop: 10,
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
      view: {
        
      },
      title: {
        
      }
})