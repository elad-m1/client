import {FC, useContext} from "react";
import {ScrollView, View} from "react-native";

import {ProductCard, Text} from "@/components";
import {ProductContext} from "@/context";
import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

const RecommendedProducts: FC = () => {
  const {styles} = useStyle();

  const {openProduct} = useContext(ProductContext);

  return (
    <View style={[styles.mainWrapper, {gap: scale(8)}]}>
      <Text style={styles.title}>home.recommended_products</Text>
      <ScrollView
        contentContainerStyle={{
          gap: scale(12),
          paddingVertical: scale(12),
          paddingHorizontal: scale(12)
        }}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {Array.from({length: 8}).map((_, index) => (
          <ProductCard
            name="שמפו נקה 7"
            imageUrl="https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            onPress={() => openProduct((Math.random() * 1000).toString())}
            price={12}
            rating={3.8}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RecommendedProducts;
