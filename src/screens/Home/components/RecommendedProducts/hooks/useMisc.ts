import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and color scheme for the RecommendedItems component.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {},
    title: {
      color: colors.text,
      fontSize: scale(18),
      fontWeight: "bold",
      marginHorizontal: scale(32)
    }
  });

  return {styles, colors};
};

export default useMisc;
