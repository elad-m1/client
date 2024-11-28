import {useTranslation} from "react-i18next";
import {View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {ProductHList} from "@/components";

import {Categories, Header, Sales} from "./components";
import {useData, useScroll, useStyle} from "./hooks";

const Shop = () => {
  const {styles, colors} = useStyle();
  const {products, searchQuery, onChangeSearch} = useData();
  const {scrollY, onScroll, animScrollY} = useScroll();

  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <Header searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <Sales />
        <ProductHList title={t("shop.trending_products")} products={products} />
        <ProductHList
          title={t("shop.recommended_products")}
          products={products}
        />
      </ScrollView>
    </View>
  );
};

export default Shop;
