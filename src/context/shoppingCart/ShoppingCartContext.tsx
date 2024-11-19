import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {RefObject, createContext, useRef, useState} from "react";

import {CartItem} from "@/utils/types";

const ShoppingCartContext = createContext({
  cartItems: [] as CartItem[],
  addItemToCart: (item: CartItem) => {},
  removeItemFromCart: (id: string) => {},
  increaseQuantity: (id: string) => {},
  decreaseQuantity: (id: string) => {},
  shoppingCartSheetRef: {} as RefObject<BottomSheetModal>,
  openShoppingCart: () => {}
});

export const ShoppingCartProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([
    {
      id: "1",
      name: "ג׳ל רחצה סופר דופר מגניב ויעיל",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      rating: 4.3,
      price: 32.9,
      quantity: 1
    },
    {
      id: "3",
      name: "ג׳ל רחצה סופר דופר מגניב ויעיל",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      rating: 4.3,
      price: 32.9,
      quantity: 1
    },
    {
      id: "2",
      name: "ג׳ל רחצה סופר דופר מגניב ויעיל",
      imageUrls: [
        "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      rating: 4.3,
      price: 32.9,
      quantity: 1
    }
  ]);

  const shoppingCartSheetRef = useRef<BottomSheetModal>(null);

  const openShoppingCart = () => {
    shoppingCartSheetRef.current?.present();
  };

  const addItemToCart = (newItem: CartItem) => {
    if (cartItems.some(item => item.id === newItem.id))
      increaseQuantity(newItem.id);
    else setCartItems(value => [...value, newItem]);
  };

  const removeItemFromCart = (id: string) =>
    setCartItems(value => value.filter(item => item.id !== id));

  const increaseQuantity = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    if (!item) return;
    item.quantity++;
    setCartItems(value => [...value]);
  };

  const decreaseQuantity = (id: string) => {
    const item = cartItems.find(item => item.id === id);
    if (!item) return;
    item.quantity--;
    setCartItems(value => [...value]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        shoppingCartSheetRef,
        openShoppingCart
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
