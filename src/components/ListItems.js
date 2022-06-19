import react from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import CareerQuiz from "../screens/CareerQuiz";

const ListItems = ({navigation}) => {

    return(
        <View >
            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Predict Career
                </Text>

                <TouchableOpacity style ={styles.buttonStyle} 
                    onPress={() => navigation.navigate(CareerQuiz)}
                > 
                    <Text style = {styles.buttonText}>Quiz</Text>
                </TouchableOpacity>

            </View>


            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Predict Personality
                </Text>

                <TouchableOpacity style = {styles.buttonStyle}> 
                    <Text style = {styles.buttonText}>Quiz</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Predict Job
                </Text>

                <TouchableOpacity style = {styles.buttonStyle}> 
                    <Text style = {styles.buttonText}>Quiz</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Trending Jobs
                </Text>

                <TouchableOpacity style = {styles.buttonStyle}> 
                    <Text style = {styles.buttonText}>View</Text>
                </TouchableOpacity>

            </View>


            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    History
                </Text>

                <TouchableOpacity style = {styles.buttonStyle}> 
                    <Text style = {styles.buttonText}>View</Text>
                </TouchableOpacity>

            </View>
            <View style={{marginBottom:160}}></View>
        </View>


    );
}

export default ListItems;



const styles = StyleSheet.create ({
    viewStyles: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flex: 1,
        margin: 15, 
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        padding: 13
    },

    textStyles: {
        fontSize: 15.5,
        color: '#19647E',
        fontWeight: 'bold'
    },

    buttonStyle: {
        backgroundColor: '#19647E',
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    }
})