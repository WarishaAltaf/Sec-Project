import { View, Text } from "react-native";
import { DrawerContentScrollView , DrawerItemList, DrawerItem } from "@react-navigation/drawer";

const CustomDrawer = (props) => {

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}/>
                <DrawerItem label="Logout" onPress={() => props.navigation.navigate("Home",{screen: 'Signin'})} />
            </DrawerContentScrollView>
        </View>

    )
}

export default CustomDrawer;