import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {SCREEN_HEIGHT, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    titleWrapper: {
      width: "100%",
      alignItems: "center",
      rowGap: scale(16),
      marginVertical: SCREEN_HEIGHT * 0.1
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold"
    },
    subTitle: {
      color: colors.textSecondary,
      fontSize: scale(12)
    },
    nextButton: {
      flexDirection: "row",
      alignItems: "center"
    },
    nextButtonText: {
      color: colors.primary,
      fontSize: scale(15),
      fontWeight: "bold",
      marginEnd: scale(4),
      includeFontPadding: false
    }
  });

  return {styles, colors};
};

export default useStyle;
