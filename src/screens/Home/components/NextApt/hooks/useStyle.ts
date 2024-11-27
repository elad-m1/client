import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and bottom safe area insets for the Home screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, bottom: number}}
 */
const useStyle = () => {
  const {bottom} = useSafeAreaInsets();
  const {colors, isDark, toggleTheme} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    sheetWrapper: {
      flex: 1,
      backgroundColor: colors.card
    },
    mainWrapper: {
      flex: 1,
      justifyContent: "space-evenly",
      paddingHorizontal: scale(16),
      paddingBottom: bottom
    },
    barber: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "center"
    },
    when: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "center"
    },
    where: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  return {styles, colors, bottom, isDark, toggleTheme};
};

export default useStyle;
