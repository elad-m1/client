import moment from "moment";
import "moment/locale/he";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {AuthProvider} from "@/context/auth/AuthContext";
import {PickPictureProvider} from "@/context/pickPicture/PickPictureContext";
import {ProductProvider} from "@/context/product/ProductContext";
import {ShoppingCartProvider} from "@/context/shoppingCart/ShoppingCartContext";
import {ThemeProvider} from "@/context/theme/ThemeContext";
import i18n from "@/locales/i18n";
import {NavContainer} from "@/navigation";
import "@/utils/icons";

function App(): React.JSX.Element {
  moment.locale(i18n.language);

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <ShoppingCartProvider>
              <ProductProvider>
                <PickPictureProvider>
                  <NavContainer />
                </PickPictureProvider>
              </ProductProvider>
            </ShoppingCartProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
