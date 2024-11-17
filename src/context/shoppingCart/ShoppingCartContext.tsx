import {createContext, useState} from "react";

import {CartItem} from "@/utils/types";

const ShoppingCartContext = createContext({
  cartItems: new Map(),
  addItemToCart: (item: CartItem) => {},
  removeItemFromCart: (key: string) => {}
});

export const ShoppingCartProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<Map<string, CartItem>>(new Map());

  const addItemToCart = (item: CartItem) =>
    setCartItems(value => {
      value.set(item.key, item);
      return value;
    });

  const removeItemFromCart = (key: string) =>
    setCartItems(value => {
      value.delete(key);
      return value;
    });

  return (
    <ShoppingCartContext.Provider
      value={{cartItems, addItemToCart, removeItemFromCart}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
