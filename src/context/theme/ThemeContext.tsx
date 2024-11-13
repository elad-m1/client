import {ReactNode, createContext, useState} from "react";
import {Appearance} from "react-native";
import NavBar from "react-native-system-navigation-bar";

import {darkTheme, lightTheme} from "./themes";

const ThemeContext = createContext({
  isDark: false,
  colors: {
    primary: "",
    onPrimary: "",
    accent: "",
    onAccent: "",
    background: "",
    card: "",
    text: "",
    textSecondary: "",
    placeholder: "",
    border: "",
    error: "",
    success: "",
    notification: ""
  },
  toggleTheme: () => {}
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");
  NavBar.setNavigationColor(
    "#00000000",
    isDark ? "dark" : "light",
    "navigation"
  );

  const toggleTheme = () => {
    setIsDark(currentValue => {
      NavBar.setBarMode(currentValue ? "dark" : "light", "both");
      return !currentValue;
    });
  };

  const colors = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
