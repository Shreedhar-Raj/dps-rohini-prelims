import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput'
import MiniHeading from '../components/MiniHeading'
import Button from '../components/Button'
import Title from '../components/Title'
import MiniText from '../components/MiniText'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.cnt}>
      <SafeAreaView>
      <View style={styles.view}>
            <Title  text="Login" />
            <View style={styles.everything}>
                <MiniHeading style={styles.mdtext} text="Email" />
                <FormInput placeholder="example@email.com" />
            </View>
            <View style={styles.everything}>
                <MiniHeading text="Password" />
                <FormInput password={true} placeholder="yoursupersecretpassword" />
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <MiniText text="Don't have an account? Register here!" />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonStyle}>Login</Text>
            </View>
      </View>
    </SafeAreaView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    everything: {
        paddingTop: 50,
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
        shadowRadius: 15,
        borderWidth: 0.5,
        borderColor: "#A91FFf",
        borderRadius: 50,
        top: "29%"
      },
    
      buttonStyle: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
      },
      view: {
        top: "25%",
    justifyContent: "center",
    alignItems: "center",
      },
      title: {
    
    justifyContent: "center",

      },
      cnt: {
        height: "100%",
        backgroundColor: '#000'
      },
})