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
      paddingHorizontal: scale(24),
      paddingVertical: scale(16),
      gap: scale(12)
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
    emptyListLabel: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  return {styles, colors};
};

export default useStyle;
