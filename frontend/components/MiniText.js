import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiniText = (props) => {
  return (
    <View>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

export default MiniText

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: 10,
        paddingLeft: 9,
    }
})