import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: scale(24),
      gap: scale(12)
    },
    title: {
      color: colors.textSecondary,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    settingsWrapper: {
      borderRadius: scale(12),
      overflow: "hidden"
    },
    divider: {
      backgroundColor: colors.background,
      height: scale(1),
      width: "100%"
    }
  });

  return {styles, colors};
};

export default useStyle;
