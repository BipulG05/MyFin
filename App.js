import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './src/layout/LoginSign/Welcome';
// import Login from './src/layout/LoginSign/Login';
import RootNavigation from './src/RootNavigation';


export default function App() {
  return (  
    <RootNavigation/>
    // <Welcome/>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
