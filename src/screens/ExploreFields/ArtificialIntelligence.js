import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/Foundation';
import Header from "../../components/Header";

const ArtificialIntelligence = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
            <ScrollView>




                <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style = {styles.heading}>
                        Artificial Intelligence
                    </Text>
                    <Text style = {styles.paragraph}>
                    Artificial intelligence or AI refers to software technologies that make a robot or computer act 
                    and think like a human. Some software engineers say that it is only artificial intelligence if it 
                    performs as well or better than a human. In this context, when we talk about performance, we mean human 
                    computational accuracy, speed, and capacity.
                    </Text>
                    <Text style = {styles.subheading}>
                        Development of Artificial Intelligence:
                    </Text>
                    <Text style = {styles.paragraph}>
                    Artificial intelligence is a theory and development of computer systems that can perform tasks that 
                    normally require human intelligence. Speech recognition, decision-making, visual perception, for example, 
                    are features of human intelligence that artificial intelligence may possess. Translation between languages 
                    is another feature.
                    </Text>
                    <Text style = {styles.subheading}>
                        Top 10 Artificial Intelligence Jobs:
                    </Text>

                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Analytics </Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>User Experience </Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Natural Language Processing</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Researcher</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Research Scientist</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}> IT Project Manager</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Software Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>AI Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Information Security Analyst </Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Mining and Analysis</Text>
                    </View>
                    
                </View>

                <View style={{marginBottom: 160}}></View>

            </ScrollView>
        </View>
    )
}

export default ArtificialIntelligence;



const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    paragraph: {
        fontSize: 15,
        paddingBottom: 10,
    },
    subheading: {
        fontSize: 17,
        fontWeight: '700',
        paddingBottom: 10,

    }
    
})