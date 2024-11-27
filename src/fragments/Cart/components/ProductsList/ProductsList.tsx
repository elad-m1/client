import {FC, useContext} from "react";
import {View} from "react-native";

import {Text} from "@/components";
import {ShoppingCartContext} from "@/context";

import Product from "./components/Product/Product";
import {useStyle} from "./hooks";

const ProductsList: FC = () => {
  const {cartItems} = useContext(ShoppingCartContext);
  const {styles} = useStyle();
  return (
    <View style={styles.mainWrapper}>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <Product {...item} key={item.id} id={item.id} onPress={() => {}} />
        ))
      ) : (
        <Text style={styles.cartEmpty}>cart.empty</Text>
      )}
    </View>
  );
};

export default ProductsList;
