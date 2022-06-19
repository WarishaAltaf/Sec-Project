import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import RadioButtonRN from 'radio-buttons-react-native';
import Cicle from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";
import { question1, question2, question3, question4, question5, question6 } from "../model/RadioData";
import { useEffect } from "react/cjs/react.production.min";

const CareerQuiz = ({navigation}) => {
    const test = () => {
        navigation.navigate('Prediction');
    }
    

    return (
        <View>
            <View>
            <Header navigation={navigation}/>

            </View>
            <ScrollView>



                    
                    <View>
                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 1:</Text>
                            <Text style = {styles.questionText}> 
                                What is your academic level?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question1}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>


                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 2:</Text>
                            <Text style = {styles.questionText}> 
                                Which subject you chose in your academics?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question2}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>


                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 2:</Text>
                            <Text style = {styles.questionText}> 
                                What do you want to do?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question3}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>


                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 3:</Text>
                            <Text style = {styles.questionText}> 
                                Why do you want to do it?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question4}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>


                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 4:</Text>
                            <Text style = {styles.questionText}> 
                                What type of environment do you prefer?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question5}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>



                        <View style = {styles.questionBorder}>
                            <Text style={styles.questionHeading}>Quesion 5:</Text>
                            <Text style = {styles.questionText}> 
                                What do you do in your leisure time?
                            </Text>
                            <RadioButtonRN
                                box = {false}
                                data={question6}
                                icon={
                                    <Cicle
                                    name="check-circle"
                                    size={25}
                                    color="#19647E"
                                    />
                                }
                            />
                        </View>



                        <TouchableOpacity style ={styles.button} onPress={test}>
                            <Text style={{color: 'white'}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style= {{marginBottom: 160}}></View>
                    
            </ScrollView>
        </View>
    )
}
export default CareerQuiz;



const styles = StyleSheet.create({
    questionBorder: {
        marginHorizontal: 20,
        borderColor: "#19647E",
        borderWidth: 2,
        borderRadius: 10, 
        padding: 10,
        margin: 20,
    },
    questionHeading: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#19647E',
        fontSize: 16,
    },
    lineStyle:{
        borderWidth: 0.5,
        height: 1,
        borderColor:'#19647E',
        marginTop: 30,
   },
    button: {
        alignItems: "center",
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 60,
        marginRight: 80,
        backgroundColor: "#19647E",
        padding: 12,
        borderRadius: 20,
    },
})