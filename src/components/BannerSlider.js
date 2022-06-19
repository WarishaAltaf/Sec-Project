import react from "react";
import { View, Text, Image } from "react-native";

const BannerSlider = ({data}) => {

    return (
        <View>
            <Image source={data.image} style={{height: 220, width: 300, borderRadius: 10}}/>
        </View>
    )

}
export default BannerSlider;