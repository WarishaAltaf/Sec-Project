import react, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";

const Signin = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <Text style ={styles.heading}>Welcome!</Text>
                <Text>Username:</Text>
                <CustomInput placeholder={"Username"} value={username} setValue={setUsername}/>

                <Text>Password:</Text>
                <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry/>

                <TouchableOpacity style ={styles.button} 
                    onPress={() => {
                        setPassword("");
                        setUsername("");
                        navigation.navigate('Home', {screen:'HomeScreen'})
                        }}> 
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.centerText}> 
                    <Text >Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={styles.centerText} 
                    onPress={() => navigation.navigate('Signup')}
                > 
                    <Text >Create Account?
                        <Text style = {styles.register}>  Register</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Signin;

// const {height} = Dimensions.get("screen");
// const height_logo = height + 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#19647E',
    },
    header: {
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingBottom: 40,
        paddingLeft: 30,
        paddingTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    heading: {
        color: '#19647E',
        fontWeight: 'bold',
        paddingLeft: 70,
        fontSize: 30,
        marginBottom: 10,
    },
    button: {
        alignItems: "center",
        margin: 10,
        marginLeft: 60,
        marginRight: 80,
        backgroundColor: "#19647E",
        padding: 12,
        borderRadius: 20,
    },
    text: {
        color: 'white',
    },
    centerText: {
        alignItems: 'center' ,
        marginBottom: 5,
        marginRight: 10,
    },
    register: {
        color: '#19647E',
        fontWeight: 'bold',

    }
});