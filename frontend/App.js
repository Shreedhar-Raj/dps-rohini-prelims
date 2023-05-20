import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import MiniHeading from './components/MiniHeading';
import Login from './screens/Login';
import Button from './components/Button';
import SignUp from './screens/SignUp';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container }>
      <Stack.Navigator>
        <Stack.Screen name="Welcome"options={{
          headerShown: false
        }} component={Welcome} />
        <Stack.Screen name="RegisterScreen"options={{
          headerShown: false
        }} component={SignUp} />
        <Stack.Screen name="LoginScreen"options={{
          headerShown: false
        }} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
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
