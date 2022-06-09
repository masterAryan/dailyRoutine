import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Choose  from './screens/choose';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './screens/Login';
import Create from './screens/CreateTT';
import Switch from './navigation/Switch'
const Stack  = createStackNavigator();
export default function App(){
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown  : false}}>
    <Stack.Screen name="create" component={Create} />
    <Stack.Screen name="screen" component={Login} />
    <Stack.Screen name="screen1" component={Choose} />
    <Stack.Screen name="Switch" component={Switch} />
    
    
    </Stack.Navigator>
    </NavigationContainer>
    
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
