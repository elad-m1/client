import {FC, useContext} from "react";
import {View} from "react-native";

import {ShoppingCartContext} from "@/context";

import Product from "./components/Product/Product";
import {useStyle} from "./hooks";

const ProductsList: FC = () => {
  const {cartItems} = useContext(ShoppingCartContext);
  const {styles} = useStyle();
  return (
    <View style={styles.mainWrapper}>
      {cartItems.map(item => (
        <Product {...item} key={item.id} id={item.id} onPress={() => {}} />
      ))}
    </View>
  );
};

export default ProductsList;
