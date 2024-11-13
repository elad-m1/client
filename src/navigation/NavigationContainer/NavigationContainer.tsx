import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {useContext} from "react";
import {View} from "react-native";

import AuthContext from "@/context/auth/AuthContext";
import ThemeContext from "@/context/theme/ThemeContext";
import {AuthNavigator, MainNavigator} from "@/navigation";

const NavContainer = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <NavigationContainer
      theme={{dark: isDark, colors: colors, fonts: DefaultTheme.fonts}}>
      {/* {isAuthenticated ? (
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>sdfas</View>
      ) : (
        <AuthNavigator />
      )} */}
      <MainNavigator />
    </NavigationContainer>
  );
};

export default NavContainer;
