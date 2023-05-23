import React from 'react';
import { Text, Image, Dimensions, View, Platform } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from "../components/CarouselCardItem"

const DetailScreen = ({ route }) => {
  console.log(route);
  const {image } = route.params;
  const { width: viewportWidth } = Dimensions.get('window');
  const isCarousel = React.useRef(null);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', width: '100%' }}>

      <Text className="text-center font-semibold text-2xl mt-12">Product Details</Text>
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={image}
        renderItem={({ item }) => <CarouselCardItem item={item} />}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        inactiveSlideShift={0}
        useScrollView={true}
        autoplay={true}
        autoplayInterval={4000}
        removeClippedSubviews={true}
      />

      {/* <Text>{title}</Text> */}
    </View>



  );
};

export default DetailScreen;
