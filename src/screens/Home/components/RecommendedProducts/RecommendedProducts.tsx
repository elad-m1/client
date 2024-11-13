import {ScrollView, View} from "react-native";

import {ProductCard, Text} from "@/components";
import {scale} from "@/utils/sizing";

import useMisc from "./hooks/useMisc";
import useNav from "./hooks/useNav";

const RecommendedProducts = () => {
  const {styles} = useMisc();
  const {goToProduct} = useNav();

  return (
    <View style={[styles.mainWrapper, {gap: scale(8)}]}>
      <Text style={styles.title}>home.recommended_products</Text>
      <ScrollView
        contentContainerStyle={{
          gap: scale(12),
          paddingVertical: scale(8),
          paddingHorizontal: scale(12)
        }}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {Array.from({length: 8}).map((_, index) => (
          <ProductCard
            name="שמפו נקה 7"
            imageUrl="https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            onPress={goToProduct}
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
