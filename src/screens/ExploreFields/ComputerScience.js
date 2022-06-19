import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Header from '../../components/Header'


const ComputerScience = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
            <ScrollView>


                <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style = {styles.heading}>
                        Computer Science
                    </Text>
                    <Text style = {styles.paragraph}>
                        Computer science is the study of computers and computing as well as their theoretical 
                        and practical applications. Computer science applies the principles of mathematics, 
                        engineering, and logic to a plethora of functions, including algorithm formulation, 
                        software and hardware development, and artificial intelligence.
                    </Text>
                    <Text style = {styles.subheading}>
                        Development of Computer Science:
                    </Text>
                    <Text style = {styles.paragraph}>
                        Computer science emerged as an independent discipline in the early 1960s, although the 
                        electronic digital computer that is the object of its study was invented some two decades 
                        earlier. The roots of computer science lie primarily in the related fields of mathematics, 
                        electrical engineering, physics, and management information systems.
                    </Text>
                    <Text style = {styles.subheading}>
                        Top 10  Computer Science Jobs:
                    </Text>

                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Software Developer</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Database Administrator </Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer Hardware Engineer</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer Systems Analyst </Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer Network Architect</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}> IT Project Manager</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer and Information Systems Managers</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer and Information Research Scientists</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Information Security Analyst </Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Web Developer</Text>
                    </View>
                    
                </View>
                <View style={{marginBottom: 160}}></View>

            </ScrollView>
        </View>
    )
}

export default ComputerScience;



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