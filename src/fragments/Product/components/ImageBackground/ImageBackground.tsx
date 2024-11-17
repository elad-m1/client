import {FC} from "react";
import {Image, Text as RNText, View} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  imageUrl: string;
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
const ImageBackground: FC<Props> = ({imageUrl, sale}) => {
  const {styles} = useStyle();
  return (
    <View style={[styles.mainWrapper, {gap: scale(8)}]}>
      <Image source={{uri: imageUrl}} resizeMode="cover" style={styles.image} />
      <View style={styles.sheetHandle}></View>
      <View style={styles.saleWrapper}>
        <RNText style={styles.sale}>{sale * 100}%</RNText>
      </View>
    </View>
  );
};

export default ImageBackground;
