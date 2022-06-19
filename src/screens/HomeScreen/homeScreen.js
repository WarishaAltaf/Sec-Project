import { useState } from "react";
import { View, SafeAreaView, ScrollView,Dimensions } from "react-native";

import Carousel from 'react-native-snap-carousel';
import BannerSlider from "../../components/BannerSlider";
import { sliderData } from "../../model/data";
import CustomSwitch from "../../components/CustomSwitch";
import ListItems from "../../components/ListItems";
import ExploreItems from "../../components/ExploreItems";
import Header from "../../components/Header";



const HomeScreen = ({navigation}) => {

    const renderBanner = ({item}) => {
        return <BannerSlider data={item} />;
      };
    
    const windowWidth = Dimensions.get('window').width;
    
    const [careerTab, setCareerTab] = useState (1);
    const onSelectSwitch = (value) => {
        setCareerTab(value);
    }

    return (
        <SafeAreaView >
            <Header navigation={navigation}/>

            <ScrollView>


                <Carousel
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                    loop={true}
                    autoplay={true}
                    autoplayDelay={1}
                />


                <View style ={{margin: 20}}>
                    <CustomSwitch
                        selectionMode={1}
                        option1 = 'Career'
                        option2= 'Explore'
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {careerTab == 1  && <ListItems navigation={navigation}/>}
                {careerTab == 2  && <ExploreItems navigation={navigation}/>}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;