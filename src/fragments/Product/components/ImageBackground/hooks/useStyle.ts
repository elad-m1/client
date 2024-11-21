import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {SCREEN_HEIGHT, SCREEN_WIDTH, scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the ImageBackground component.
 *
 * @returns {{styles: Record<string, ViewStyle>}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {},
    image: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * 0.35,
      backgroundColor: colors.background
    },
    dotsWrapper: {
      backgroundColor: `${colors.onPrimary}45`,
      position: "absolute",
      bottom: scale(8),
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      gap: scale(8),
      paddingHorizontal: scale(10),
      paddingVertical: scale(5),
      borderRadius: scale(16)
    },
    dot: {
      height: scale(6),
      width: scale(6),
      borderRadius: scale(3),
      backgroundColor: "#fff"
    },
    sheetHandle: {
      backgroundColor: "#fff",
      position: "absolute",
      top: scale(8),
      alignSelf: "center",
      height: scale(6),
      width: scale(42),
      borderRadius: scale(12)
    },
    saleWrapper: {
      position: "absolute",
      bottom: scale(16),
      left: scale(16),
      backgroundColor: colors.card,
      paddingHorizontal: scale(10),
      paddingVertical: scale(5),
      borderRadius: scale(6)
    },
    sale: {
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    }
  });

  return {styles};
};

export default useStyle;
