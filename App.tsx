import moment from "moment";
import "moment/locale/he";
import {I18nManager} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {AuthProvider} from "@/context/auth/AuthContext";
import {ShoppingCartProvider} from "@/context/shoppingCart/ShoppingCartContext";
import {ThemeProvider} from "@/context/theme/ThemeContext";
import {NavContainer} from "@/navigation";
import "@/utils/icons";

function App(): React.JSX.Element {
  moment.locale(I18nManager.isRTL ? "he" : "en");

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
            <ShoppingCartProvider>
              <NavContainer />
            </ShoppingCartProvider>
          </AuthProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
