import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.img} />
        
      <Text style={styles.title}>Welcome To Wikit!</Text>
        <Text style={styles.text}>Join our community to stay connected share experiances, and make memories.</Text>
        <View style={styles.buttonContainer}>
                <Text style={styles.buttonStyle}>Continue</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  view: {
    top: "50%",
    justifyContent: "center",
  alignItems: "center",
  },
  title: {
    fontSize: 34,
    color: 'white',
      fontWeight: 'bold',
      paddingTop: "10%"
  },
  img: {
    width: 400,
    height: 120,
  },
  text: {
    paddingTop: 12,
    fontSize: 14,
    color: 'white',
    fontWeight: 'light',
    width: 250,
    textAlign: 'center',
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
    top: "19%"
  },

  buttonStyle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
})