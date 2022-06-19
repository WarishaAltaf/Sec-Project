import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Header from "../../components/Header";


const ComputerEngineering = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
            <ScrollView>



                <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                    <Text style = {styles.heading}>
                        Computer Engineering
                    </Text>
                    <Text style = {styles.paragraph}>
                        Computer engineering is a discipline that embodies the science and technology of 
                        design, construction, implementation, and maintenance of software and hardware components 
                        of modern computing systems and computer-controlled equipment. 
                    </Text>
                    <Text style = {styles.subheading}>
                        Development of Computer Science:
                    </Text>
                    <Text style = {styles.paragraph}>
                        Computer engineers design, create, and test computer hardware and software, 
                        analyze the results, and update outdated equipment so that it’s ready to use with new software. 
                        Some engineers also oversee manufacturing and development processes, while others are more 
                        involved in testing software.
                    </Text>
                    <Text style = {styles.subheading}>
                        Top 10 Computer Engineering Jobs:
                    </Text>

                    
                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Hardware Engineer</Text>
                    </View>

                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>System Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Electrical Engineer</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Data Scientist</Text>
                    </View>



                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Database Administrator</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Information System Manager</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Software Developer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Big Data Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Machine Learning Engineer</Text>
                    </View>


                    <View style = {{flexDirection: 'row'}}>
                        <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                        <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer Network Architect</Text>
                    </View>
                    
                </View>
                <View style ={{marginBottom:160}}></View>

            </ScrollView>
        </View>
    )
}

export default ComputerEngineering;



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