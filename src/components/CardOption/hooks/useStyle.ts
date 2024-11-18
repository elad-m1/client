import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingHorizontal: scale(16),
      paddingVertical: scale(12),
      borderWidth: scale(2),
      borderColor: colors.border,
      borderRadius: scale(8),
      gap: scale(8)
    },
    active: {
      borderColor: colors.primary
    },
    disabled: {
      backgroundColor: `${colors.placeholder}35`,
      borderColor: "transparent"
    },
    text: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useStyle;
