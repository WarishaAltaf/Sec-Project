import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/Foundation';



const Header = ({navigation}) => {
    return(
        <View
            style = {{
                paddingTop: 60,
                paddingLeft: 30,
                paddingBottom: 28, 
                paddingRight: 30,
                backgroundColor: '#19647E',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 30,
        }}
        >   
            <TouchableOpacity>
                <Icon
                    name="menu"
                    size={28}
                    color="#fff"
                    onPress = {() => navigation.openDrawer()}
                /> 
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}
>  
                    <HomeIcon
                        name="home"
                        size={30}
                        color="#fff"
                    />                
            </TouchableOpacity> 
        </View>
    )
}

export default Header;


const styles = StyleSheet.create({
    
})