import { Button, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";

export const Harish = () => {

    const handleharish = () => {
        ToastAndroid.show("Hello Harish! Welcome", ToastAndroid.SHORT);
    }
    return (
        <View>
           <Text style={styles.Text}>Name : Harish</Text>
             <TouchableOpacity style={styles.button} onPress={handleharish}>
                     <Text style={styles.buttonText}>Click</Text>
                   </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
  Text : {
    color: 'white',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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