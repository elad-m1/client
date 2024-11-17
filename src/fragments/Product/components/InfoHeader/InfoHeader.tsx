import {FC} from "react";
import {Text as RNText, View} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  name: string;
  price: number;
  category: string;
  credits: number;
}

/**
 * A component that displays product info (name, price, category) as a header.
 *
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {string} category - The category that the product belongs to.
 *
 * @returns A React component that renders a header with the product's name, price, and category.
 */
const InfoHeader: FC<Props> = ({name, price, category}) => {
  const {styles, colors} = useStyle();

  return (
    <View style={[styles.mainWrapper, {gap: scale(8)}]}>
      <View style={styles.row}>
        <RNText style={styles.name}>{name}</RNText>
        <View style={styles.priceWrapper}>
          <RNText style={styles.price}>{price.toFixed(2)} ₪</RNText>
        </View>
      </View>
      <View style={styles.row}>
        <RNText style={styles.category}>{category}</RNText>
        <RNText style={styles.credits}>צבירה של 2.5 נקודות</RNText>
      </View>
    </View>
  );
};

export default InfoHeader;
