import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import MiniHeading from './components/MiniHeading';
import Login from './screens/Login';
import Button from './components/Button';
import SignUp from './screens/SignUp';
import Welcome from './screens/Welcome';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
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
