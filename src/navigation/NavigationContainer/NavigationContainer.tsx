import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useContext} from "react";

import {AuthContext, ProductContext, ShoppingCartContext} from "@/context";
import {ThemeContext} from "@/context";
import {Cart, Product} from "@/fragments";
import {AuthNavigator, MainNavigator} from "@/navigation";

const NavContainer = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthContext);
  const {productSheetRef} = useContext(ProductContext);
  const {shoppingCartSheetRef} = useContext(ShoppingCartContext);

  return (
    <NavigationContainer
      theme={{dark: isDark, colors: colors, fonts: DefaultTheme.fonts}}>
      <BottomSheetModalProvider>
        {true ? <MainNavigator /> : <AuthNavigator />}
        <Product ref={productSheetRef} />
        <Cart ref={shoppingCartSheetRef} />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default NavContainer;
