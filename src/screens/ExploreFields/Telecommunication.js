import { Text ,View, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import Header from "../../components/Header";


const Telecommunication = ({navigation}) => {
    return (
        <View>
            <View>
                <Header navigation={navigation}/>
            </View>
            <ScrollView>


                        <View style ={{marginHorizontal: 20, marginVertical: 10}}>
                            <Text style = {styles.heading}>
                                Telecommunication
                            </Text>
                            <Text style = {styles.paragraph}>
                                A telecommunications network is an arrangement of computing and telecommunications 
                                resources for communication of information between distant locations.The electronic 
                                transmission of information over distances, called telecommunications, has become 
                                virtually inseparable from computers: Computers and telecommunications create value together.
                            </Text>
                            <Text style = {styles.subheading}>
                                Role of Telecommunication:
                            </Text>
                            <Text style = {styles.paragraph}>
                                The purpose of a telecommunication system is to exchange information among users of 
                                the system. This information exchange can take place in a variety of ways, for example, 
                                multiparty voice communications, television, electronic mail, and electronic message exchange.
                            </Text>

                            <Text style = {styles.subheading}>
                                Importance of Telecommunication:
                            </Text>
                            <Text style = {styles.paragraph}>
                                Telecommunication is the transmission of signals,signs,writings,words,messages,sounds 
                                and images,by radio,wire,optical,or other types of electromagnetic systems. Telecommunication 
                                happens when there is an exchange of information between participants with the help of technology.                    </Text>

                            <Text style = {styles.subheading}>
                                Top 10  Computer Science Jobs:
                            </Text>

                            
                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Customer service representative</Text>
                            </View>

                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Telecommunications operator</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Computer programmer</Text>
                            </View>



                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Cable installer</Text>
                            </View>



                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Telecommunications technician</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Data analyst</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Telecommunications manager</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Telecommunications specialist</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>Systems manager</Text>
                            </View>


                            <View style = {{flexDirection: 'row'}}>
                                <Text style={{ fontSize: 25 }}>{'\u2022'}</Text>
                                <Text style={{paddingTop: 6, paddingLeft: 10}}>VoIP (voice over internet protocol) engineer</Text>
                            </View>
                            
                        </View>
                        <View style={{marginBottom: 160}}></View>
                        

                    </ScrollView>
            </View>
    )
}

export default Telecommunication;



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