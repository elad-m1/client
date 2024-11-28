import {Image, Pressable} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {useStyle} from "./hooks";

const Sales = () => {
  const {styles} = useStyle();

  return (
    <ScrollView
      contentContainerStyle={styles.mainWrapper}
      showsHorizontalScrollIndicator={false}
      horizontal
      pagingEnabled>
      {Array.from({length: 4}).map((_, index) => (
        <Pressable
          key={index}
          style={({pressed}) => [
            styles.saleWrapper,
            {opacity: pressed ? 0.5 : 1}
          ]}>
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-vector/flash-sale-shopping-poster-banner-260nw-2410458321.jpg"
            }}
            style={styles.saleImage}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Sales;
