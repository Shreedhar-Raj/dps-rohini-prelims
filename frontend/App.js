import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import Button from './components/Button';
import FormInput from './components/FormInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FormInput placeholder="enter email here" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1.4,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    borderLeftWidth: 4,
  borderRightWidth: 4,
  height: 70
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
