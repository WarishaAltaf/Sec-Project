import react from "react";
import { View,Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}> 
            <TextInput 
                value = {value}
                onChangeText = {setValue}
                style = {styles.input} 
                placeholder={placeholder} 
                secureTextEntry = {secureTextEntry}
            >
            </TextInput>
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