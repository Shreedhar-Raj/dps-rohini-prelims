import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput'
import MiniHeading from '../components/MiniHeading'
import Button from '../components/Button'
import Title from '../components/Title'
import MiniText from '../components/MiniText'
import { useNavigation } from '@react-navigation/native'

const Pricing = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.cnt}>
    <SafeAreaView>
    <View style={styles.view}>
          <Title  text="Choose A Plan" />
          <View style={styles.box}>
              <MiniHeading style={styles.mdtext} text="Free" />
              <MiniText text="✅ Chat with other fans." />
              <MiniText text="✅ Recieve personalised merch & tickets to live games." />
              <MiniText text="✅ Statistics & Analysis of games." />
          </View>
          <View style={styles.box}>
              <MiniHeading style={styles.mdtext} text="Basic: ₹129/month" />
              <MiniText text="✅ Everything in the free plan." />
              <MiniText text="✅ Fan Meetups." />
              <MiniText text="✅ 10% Discount on Merch" />
              <MiniText text="✅ 10% Discount on Tickets" />
          </View>
          <View style={styles.box}>
              <MiniHeading style={styles.mdtext} text="Premium: ₹179/month" />
              <MiniText text="✅Everything in the Basic plan." />
              <MiniText text="✅Upto 50% Discount on Merch" />
              <MiniText text="✅Upto 50% Discount on Tickets." />
              <MiniText text="✅Friendly fan tournaments." />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('TeamPref')}>
          <View style={styles.buttonContainer}>
              <Text style={styles.buttonStyle}>Buy Now</Text>
          </View>
          </TouchableOpacity>
    </View>
  </SafeAreaView>
</View>
  )
}

export default Pricing

const styles = StyleSheet.create({
    everything: {
        paddingTop: 10,
    },
    inbetween: {
        paddingTop: 10,
    },
    box: {
        
        backgroundColor: '#000',
        padding: 15,
        color: "white",
        margin: 15,
        borderRadius: 20,
        width: 300,
        shadowColor: '#A91FFF',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        borderWidth: 0.5,
        borderColor: "#A91FFf",
        borderRadius: 10,
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
      view: {
        top: "1 5%",
    justifyContent: "center",
    alignItems: "center",
      },
      cnt: {
        height: "100%",
        backgroundColor: '#000'
      },
      title: {
    
    justifyContent: "center",
    
      }
})