import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiniHeading = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

export default MiniHeading

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingLeft: 6,
    }
})