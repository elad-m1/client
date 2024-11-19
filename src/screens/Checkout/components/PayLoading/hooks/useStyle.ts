import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {SCREEN_HEIGHT, SCREEN_WIDTH, scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the ChooseDate screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      height: SCREEN_HEIGHT,
      width: SCREEN_WIDTH,
      position: "absolute",
      backgroundColor: `${colors.background}da`,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1
    },
    title: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold"
    },
    methodsWrapper: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    paymentComplete: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useStyle;
