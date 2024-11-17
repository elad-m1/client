import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useContext} from "react";
import {View} from "react-native";

import {AuthContext} from "@/context";
import {ThemeContext} from "@/context";
import {AuthNavigator, MainNavigator} from "@/navigation";

const NavContainer = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <NavigationContainer
      theme={{dark: isDark, colors: colors, fonts: DefaultTheme.fonts}}>
      <BottomSheetModalProvider>
        {true ? <MainNavigator /> : <AuthNavigator />}
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default NavContainer;
