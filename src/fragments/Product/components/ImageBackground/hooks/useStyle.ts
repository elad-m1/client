import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

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
      width: "100%",
      height: scale(250),
      backgroundColor: colors.background
      // paddingTop: scale(16)
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
