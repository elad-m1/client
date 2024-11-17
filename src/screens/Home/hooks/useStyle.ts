import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_HEIGHT, scale} from "@/utils/sizing";

/**
 * Provides styles and bottom safe area insets for the Home screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, bottom: number}}
 */
const useStyle = () => {
  const {bottom} = useSafeAreaInsets();
  const {colors, isDark, toggleTheme} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1
    },
    titleWrapper: {
      width: "100%",
      alignItems: "center",
      rowGap: scale(16),
      marginTop: SCREEN_HEIGHT * 0.1,
      marginBottom: SCREEN_HEIGHT * 0.065
    }
  });

  return {styles, colors, bottom, isDark, toggleTheme};
};

export default useStyle;
