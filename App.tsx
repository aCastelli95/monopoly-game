import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import ContadorScreen from './src/screens/ContadorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ContadorScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
  },
});
