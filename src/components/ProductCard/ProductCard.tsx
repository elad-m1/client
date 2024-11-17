import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {
  Image,
  Pressable,
  Text as RNText,
  StyleProp,
  View,
  ViewStyle
} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  name: string;
  imageUrl: string;
  rating: number;
  price: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

/**
 * A card that displays a product's details.
 *
 * @param {{name: string, imageUrl: string, rating: number, price: number, onPress: () => void, style?: StyleProp<ViewStyle>}} props
 * @prop {string} name The name of the product.
 * @prop {string} imageUrl The URL of the product's image.
 * @prop {number} rating The rating of the product.
 * @prop {number} price The price of the product.
 * @prop {() => void} onPress The function to call when the card is pressed.
 * @prop {StyleProp<ViewStyle>} [style] The style of the card.
 *
 * @returns {JSX.Element} The element representing the card.
 */
const ProductCard: FC<Props> = memo(
  ({name, imageUrl, rating, price, onPress, style}) => {
    const {styles} = useStyle();
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.mainWrapper,
          {opacity: pressed ? 0.65 : 1},
          style
        ]}>
        <View style={styles.innerWrapper}>
          <Image
            source={{uri: imageUrl}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.detailsWrapper}>
            <View style={[styles.nameRatingWrapper, {gap: scale(16)}]}>
              <RNText style={styles.name}>{name}</RNText>
              <View style={[styles.ratingWrapper, {gap: scale(4)}]}>
                <FontAwesomeIcon icon="star" color="gold" size={scale(12)} />
                <RNText style={styles.rating}>{rating.toFixed(1)}</RNText>
              </View>
            </View>
            <RNText style={styles.price}>{price} ₪</RNText>
          </View>
        </View>
      </Pressable>
    );
  }
);

export default ProductCard;
