import {FC} from "react";
import {Image, Text as RNText, View} from "react-native";
import {FlatList, ScrollView} from "react-native-gesture-handler";

import {scale} from "@/utils/sizing";

import {useGallery} from "./hooks";
import useStyle from "./hooks/useStyle";

interface Props {
  imageUrls: string[];
  sale: number;
}

/**
 * A component that displays an image background with a close button and sale percentage.
 *
 * @param {string} imageUrl - The URL of the image to display as the background.
 * @param {number} sale - The sale percentage to display, given as a decimal (e.g., 0.25 for 25%).
 *
 * @returns {JSX.Element} A view containing the image, a close button, and the sale percentage.
 */
const ImageBackground: FC<Props> = ({imageUrls, sale}) => {
  const {styles} = useStyle();
  const {galleryIndex, onViewableItemsChanged} = useGallery();
  return (
    <View style={styles.mainWrapper}>
      <FlatList
        data={imageUrls}
        renderItem={({item, index}) => (
          <Image
            key={index}
            source={{uri: item}}
            resizeMode="cover"
            style={styles.image}
          />
        )}
        keyExtractor={(_item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 50
        }}
        pagingEnabled
        horizontal
      />
      <View style={styles.dotsWrapper}>
        {Array.from({length: imageUrls.length}).map((_, index) => (
          <View
            style={[
              styles.dot,
              {opacity: index === galleryIndex ? 1 : 0.5}
            ]}></View>
        ))}
      </View>
      <View style={styles.sheetHandle}></View>
      <View style={styles.saleWrapper}>
        <RNText style={styles.sale}>{sale * 100}%</RNText>
      </View>
    </View>
  );
};

export default ImageBackground;
