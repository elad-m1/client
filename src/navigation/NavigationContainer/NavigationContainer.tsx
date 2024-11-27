import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useContext} from "react";

import {
  AuthContext,
  PickPictureContext,
  ProductContext,
  ShoppingCartContext
} from "@/context";
import {ThemeContext} from "@/context";
import {Cart, PickPicture, Product} from "@/fragments";
import {AuthNavigator, MainNavigator} from "@/navigation";

const NavContainer = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthContext);
  const {productSheetRef} = useContext(ProductContext);
  const {shoppingCartSheetRef} = useContext(ShoppingCartContext);
  const {pickPictureRef} = useContext(PickPictureContext);

  return (
    <NavigationContainer
      theme={{dark: isDark, colors: colors, fonts: DefaultTheme.fonts}}>
      <BottomSheetModalProvider>
        {true ? <MainNavigator /> : <AuthNavigator />}
        <Product ref={productSheetRef} />
        <Cart ref={shoppingCartSheetRef} />
        <PickPicture ref={pickPictureRef} />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default NavContainer;
