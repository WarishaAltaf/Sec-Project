import react from "react";
import { View,Text, TextInput, StyleSheet } from "react-native";

const CustomInput = () => {
    return (
        <View style={styles.container}> 
            <TextInput style = {styles.input} placeholder="Placeholder"></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    input: {
        borderWidth: 1,
        borderColor: '#19647E',
        borderRadius: 10,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10,
        padding: 6,
    }
});

export default CustomInput;