import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  })
  if (!fontsLoaded) return <AppLoading />;

  return (
    <View>
      <Header />
      <Image 
      style={styles.imagen}
      source={require("./img/cryptomonedas.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: "100%",
    height: 150,
    marginHorizontal: "2.5%"
  }
});
