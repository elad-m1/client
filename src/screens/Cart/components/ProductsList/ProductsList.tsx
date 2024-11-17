import {FC, useContext} from "react";
import {View} from "react-native";
import {FlatList} from "react-native-gesture-handler";

import {ShoppingCartContext} from "@/context";

interface Props {}

const ProductsList: FC = () => {
  const {cartItems} = useContext(ShoppingCartContext);
  return (
    // <FlatList
    //   data={Array(cartItems)}

    // />
    <View></View>
  );
};

export default ProductsList;
