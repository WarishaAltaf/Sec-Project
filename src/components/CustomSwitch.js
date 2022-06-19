import react , { useState } from "react";
import { View, Text, Image,  TouchableOpacity, StyleSheet} from "react-native";


const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    onSelectSwitch,
}) => {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const updateSwitchData = value => {
        setSelectionMode(value);
        onSelectSwitch(value);
      };

    return(

      <View
          style={{
            height: 44,
            width: '100%',
            backgroundColor: '#e4e4e4',
            borderRadius: 10,
            borderColor: '#19647E',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>


          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(1)}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 1 ? '#19647E' : '#e4e4e4',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: getSelectionMode == 1 ? 'white' : '#19647E',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {option1}
            </Text>
          </TouchableOpacity>



          <TouchableOpacity
            activeOpacity={1}
            onPress={() => updateSwitchData(2)}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 2 ? '#19647E' : '#e4e4e4',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: getSelectionMode == 2 ? 'white' : '#19647E',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {option2}
            </Text>
          </TouchableOpacity>
    </View>
  );

}

export default CustomSwitch;


const styles = StyleSheet