import {ReactNode, createContext, useState} from "react";
import {Appearance} from "react-native";
import NavBar from "react-native-system-navigation-bar";

import {darkTheme, lightTheme} from "./themes";

const ThemeContext = createContext({
  isDark: false,
  colors: lightTheme,
  toggleTheme: () => {}
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");
  NavBar.setNavigationColor("#00000000", isDark ? "light" : "dark", "both");

  const toggleTheme = () => setIsDark(currentValue => !currentValue);

  const colors = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
