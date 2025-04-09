import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Harish } from "./components/Harish";
import Footer from './components/Footer';

const App = () => {
  const n1 = "Ruban";
  const n2 = "Vigneshwaran";
  const handleruban = () => {
    ToastAndroid.show("Hello Ruban!, Welcome", ToastAndroid.SHORT);
  }

  const handlevicky = () => {
    ToastAndroid.show("Hello Vicky!, Welcome", ToastAndroid.SHORT);
  }
  return (
    <View style={styles.div}>
      
      <Text style={styles.Text}>Name: {n1}</Text>
      <TouchableOpacity style={styles.button} onPress={handleruban}>
      <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Name: {n2}</Text>
      <TouchableOpacity style={styles.button} onPress={handlevicky}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>

      <Harish />

      <Footer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Text : {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginLeft: 30
  },
  text: {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 30
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 20,
    
  },
  
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  

})