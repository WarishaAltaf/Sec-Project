import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/Foundation';
import Header from "../../components/Header";


const DataScience = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
        <ScrollView>




                <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style = {styles.heading}>
                        Data Science
                    </Text>
                    <Text style = {styles.paragraph}>
                        Data science is an interdisciplinary field that uses scientific methods, processes, 
                        algorithms and systems to extract knowledge and insights from noisy, structured and 
                        unstructured data and apply knowledge from data across a broad range of application domains. 
                        Data science is related to data mining, machine learning and big data.

                    </Text>
                    <Text style = {styles.subheading}>
                        Development of Data Science:
                    </Text>
                    <Text style = {styles.paragraph}>
                        Data science is a "concept to unify statistics, data analysis, informatics, and their related 
                        methods" in order to "understand and analyse actual phenomena" with data. It uses techniques 
                        and theories drawn from many fields within the context of mathematics, statistics, computer 
                        science, information science, and domain knowledge. However, data science is different from 
                        computer science and information science. 
                    </Text>
                    <Text style = {styles.subheading}>
                        Top 10 Data Science Jobs:
                    </Text>

                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Scientist</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Machine Learning Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Machine Learning Scientist</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Applications Architect</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Enterprise Architect</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Architect</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Infrastructure Architect</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Business Intelligence (BI) Developer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Statistician</Text>
                    </View>
                    
                </View>
                <View style={{marginBottom: 160}}></View>

            </ScrollView>
            </View>
    )
}

export default DataScience;



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