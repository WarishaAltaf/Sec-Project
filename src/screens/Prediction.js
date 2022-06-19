import Header from "../components/Header";
import { Image, View, StyleSheet, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackActions } from '@react-navigation/native';

const Prediction = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/Component.png')} />
            </View>
            <View style= {styles.container}>
                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#5E90D7"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Computer Science
                    </Text>
                </View>

                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#2FC25B"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Computer Engineering
                    </Text>
                </View>


                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#14C2C2"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Software Engineering
                    </Text>
                </View>


                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#FACC15"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Artifical Intelligence
                    </Text>
                </View>



                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#EF4864"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Data Science
                    </Text>
                </View>


                <View style= {styles.textContainer}>
                    <Icon
                        name="square"
                        size={12}
                        color="#8543E0"
                        style = {styles.icon}
                    />
                    <Text style= {styles.text}>
                        Telecommunication
                    </Text>

                    
                </View>


                </View>

                <TouchableOpacity style ={styles.button} onPress={() => navigation.dispatch(StackActions.replace('CareerQuiz'))}>
                        <Text style={{color: 'white'}}>Take another Quiz</Text>
                </TouchableOpacity>
            </View>


        )
    }
export default Prediction;

const styles = StyleSheet.create({

    container: {
        display:'flex',
        marginLeft: 30
    },
    imgContainer: {
        display:'flex',
        alignItems: 'center'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: 10,
    },
    icon:{
        paddingTop: 5
    },
    text: {
        paddingLeft: 10
    },
    button: {
        alignItems: "center",
        marginTop: 20,
        marginLeft: 80,
        marginRight: 80,
        backgroundColor: "#19647E",
        padding: 12,
        borderRadius: 20,
    },

    
})