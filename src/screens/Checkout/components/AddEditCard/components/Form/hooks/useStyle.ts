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
      flex: 1,
      paddingVertical: scale(24),
      paddingHorizontal: scale(24),
      gap: scale(12)
    },
    ccNumberWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: scale(12)
    }
  });

  return {styles, colors};
};

export default useStyle;
