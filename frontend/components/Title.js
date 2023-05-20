import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontSize: 45,
      color: 'white',
      fontWeight: 'bold',
    }
})