import moment from "moment";
import "moment/locale/he";
import React from "react";
import {I18nManager} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import NavBar from "react-native-system-navigation-bar";

import {AuthProvider} from "@/context/auth/AuthContext";
import {ThemeProvider} from "@/context/theme/ThemeContext";
import {NavContainer} from "@/navigation";
import "@/utils/icons";

function App(): React.JSX.Element {
  NavBar.setNavigationColor("#00000000", "dark", "both");
  moment.locale(I18nManager.isRTL ? "he" : "en");

  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <AuthProvider>
          <NavContainer />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
