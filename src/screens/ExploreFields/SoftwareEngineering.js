import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/Foundation';
import Header from "../../components/Header";


const SoftwareEngineering = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
            <ScrollView>

                <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style = {styles.heading}>
                        Software Engineering
                    </Text>
                    <Text style = {styles.paragraph}>
                        Software engineering is a detailed study of engineering to the design, 
                        development and maintenance of software. Software engineering was introduced 
                        to address the issues of low-quality software projects. Problems arise when a 
                        software generally exceeds timelines, budgets, and reduced levels of quality. 
                    </Text>
                    <Text style = {styles.subheading}>
                        Software engineering course entry requirements:
                    </Text>
                    <Text style = {styles.paragraph}>
                        Computing and IT are the most important subjects to study, but other technical subjects 
                        like physics and design technology may also be useful. What you\'re really looking to show
                        is your attention to detail, a technical curiosity, and a natural talent with numbers and 
                        programmes. A good software engineer is diligent and analytical, able to trouble-shoot, 
                        and solve problems on the spot. These are the kind of attributes you’ll want to show in 
                        your personal statement, especially as many software engineering degrees will involve an 
                        interview.
                    </Text>
                    <Text style = {styles.subheading}>
                        Top 12 Software Engineering Jobs:
                    </Text>

                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Video game Designer </Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Quality Assurance Engineer </Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>CRM project Manager(Customer Relationship Management)</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Software Integration Engineer</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Security Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Front End Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Full Stack Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>3D Graphics Developer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Scientist</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Mobile Developer</Text>
                    </View>
                    
                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>DevOps Engineer(Development and Operations)</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Back-End Engineer</Text>
                    </View>

                </View>
                <View style={{marginBottom: 160}}></View>

            </ScrollView>
        </View>
    )
}

export default SoftwareEngineering;



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