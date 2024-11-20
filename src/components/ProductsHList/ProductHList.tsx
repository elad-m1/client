import React, {FC, useContext} from "react";
import {Text as RNText, StyleProp, View, ViewStyle} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {ProductCard} from "@/components";
import {ProductContext} from "@/context";
import {CartItem} from "@/utils/types";

import {useStyle} from "./hooks";

interface Props {
  title: string;
  products: CartItem[];
  style?: StyleProp<ViewStyle>;
}
const ProductHList: FC<Props> = ({title, products, style}) => {
  const {openProduct} = useContext(ProductContext);
  const {styles} = useStyle();

  return (
    <View style={[styles.mainWrapper, style]}>
      <RNText style={styles.title}>{title}</RNText>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {products.map((item, index) => (
          <ProductCard
            key={item.id}
            onPress={() => openProduct(item.id)}
            imageUrl={item.imageUrls[0]}
            {...item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductHList;
