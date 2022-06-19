import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Signup = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const data = [
        {
          label: 'Student'
         },
         {
          label: 'Teacher'
         }
        ];

    return (
        <View style={styles.container}>
            <View style= {styles.header}>
                <Text style ={styles.heading}>Welcome!</Text>
                <Text>Username:</Text>
                <CustomInput placeholder={"Username"} value={username} setValue={setUsername}/>

                <Text>Password:</Text>
                <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry/>

                <Text>Confirm Password:</Text>
                <CustomInput placeholder={"Confirm Password"} value={confirmPassword} setValue={setConfirmPassword} secureTextEntry/>

                <Text>Email Address:</Text>
                <CustomInput placeholder={"abc@gmail.com"} value={email} setValue={setEmail}/>

                <Text>Select One:</Text>
                <RadioButtonRN
                    box = {false}
                    data={data}
                    initial = {1}
                    icon={
                        <Icon
                        name="check-circle"
                        size={25}
                        color="#19647E"
                        />
                    }
                />

                <TouchableOpacity style ={styles.button} 
                    onPress={() => navigation.navigate('Home', {screen:'HomeScreen'})}
                > 
                    <Text style={styles.text}>SignUp </Text>
                </TouchableOpacity>

                
               

            </View>
        </View>
    )
}
export default Signup;




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