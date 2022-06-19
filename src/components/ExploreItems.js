import react from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

const ExploreItems = ({navigation}) => {

    return(
        <View >
            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Computer Science
                </Text>

                <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigation.navigate('AboutUs',{screen: 'ComputerScience'})}> 
                    <Text style = {styles.buttonText}>Explore</Text>
                </TouchableOpacity>

            </View>


            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Computer Engineering
                </Text>

                <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigation.navigate('AboutUs',{screen: 'ComputerEngineering'})}> 
                    <Text style = {styles.buttonText}>Explore</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Software Engineering
                </Text>

                <TouchableOpacity style = {styles.buttonStyle}> 
                    <Text style = {styles.buttonText} onPress={() => navigation.navigate('AboutUs',{screen: 'SoftwareEngineering'})}>Explore</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Artificial Intelligence
                </Text>

                <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigation.navigate('AboutUs',{screen: 'ArtificialIntelligence'})}> 
                    <Text style = {styles.buttonText} >Explore</Text>
                </TouchableOpacity>

            </View>


            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Data Science
                </Text>

                <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigation.navigate('AboutUs',{screen: 'DataScience'})}> 
                    <Text style = {styles.buttonText}>Explore</Text>
                </TouchableOpacity>

            </View>

            
            <View style = {styles.viewStyles}>
                <Text style = {styles.textStyles}>
                    Telecommunication
                </Text>

                <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigation.navigate('AboutUs',{screen: 'Telecommunication'})}> 
                    <Text style = {styles.buttonText}>Explore</Text>
                </TouchableOpacity>

            </View>
            <View style={{marginBottom:160}}></View>


        </View>


    );
}

export default ExploreItems;



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