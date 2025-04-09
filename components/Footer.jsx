import { StyleSheet, Text, View } from "react-native";

function Footer () {
    return (
        <View>
            <Text style={design.Text}>&copy; 2025 All Part of this codes are Recived the Permission's</Text>
        </View>
    );
};
export default Footer;

const design = StyleSheet.create({
    Text:{
        marginTop: 20,
        color: 'white',
        fontSize: 20,
      
    }
})