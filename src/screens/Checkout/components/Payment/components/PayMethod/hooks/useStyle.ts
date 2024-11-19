import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the ChooseDate screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: scale(12),
      paddingVertical: scale(16),
      gap: scale(12)
    },
    infoWrapper: {
      flex: 1,
      gap: scale(4)
    },
    title: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "left"
    },
    nameWrapper: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: scale(8)
    },
    name: {
      width: "55%",
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    methodType: {
      color: colors.textSecondary,
      fontSize: scale(12),
      textAlign: "left"
    },
    ccNumber: {
      color: colors.textSecondary,
      fontSize: scale(12),
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useStyle;
