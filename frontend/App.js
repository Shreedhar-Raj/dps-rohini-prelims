import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import Button from './components/Button';
import Podfame from './screens/Podfame';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Podfame />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1.4,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
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
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
