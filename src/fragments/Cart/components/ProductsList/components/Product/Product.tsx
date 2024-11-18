import React, {FC, memo, useContext} from "react";
import {
  Image,
  Pressable,
  Text as RNText,
  StyleProp,
  View,
  ViewStyle
} from "react-native";

import {IconButton} from "@/components";
import {ProductContext, ShoppingCartContext} from "@/context";
import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  price: number;
  quantity: number;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Product: FC<Props> = memo(
  ({id, name, imageUrl, rating, price, quantity, onPress, style}) => {
    const {increaseQuantity, decreaseQuantity, removeItemFromCart} =
      useContext(ShoppingCartContext);
    const {openProduct} = useContext(ProductContext);
    const {styles, colors} = useStyle();
    return (
      <Pressable
        onPress={() => openProduct(id)}
        style={({pressed}) => [
          styles.mainWrapper,
          style,
          {opacity: pressed ? 0.5 : 1}
        ]}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.infoWrapper}>
          <View style={styles.namePriceWrapper}>
            <RNText style={styles.name} numberOfLines={1}>
              {name}
            </RNText>
            <RNText style={styles.price}>{price.toFixed(2)} ₪</RNText>
          </View>
          <View style={styles.quantityWrapper}>
            <IconButton
              icon="minus"
              mode="contained"
              color={colors.textSecondary}
              size={scale(12)}
              elevation={false}
              onPress={() => decreaseQuantity(id)}
            />
            <RNText style={styles.quantity}>{quantity}</RNText>
            <IconButton
              icon="plus"
              mode="contained"
              color={colors.textSecondary}
              size={scale(12)}
              elevation={false}
              onPress={() => increaseQuantity(id)}
            />
          </View>
        </View>
        <IconButton
          icon="trash"
          onPress={() => removeItemFromCart(id)}
          size={scale(12)}
          mode="contained"
          elevation={false}
          color={colors.textSecondary}
          style={{alignSelf: "flex-end"}}
        />
      </Pressable>
    );
  }
);

export default Product;
