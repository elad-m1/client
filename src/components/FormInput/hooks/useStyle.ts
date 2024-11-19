import {useContext} from "react";
import {I18nManager, Platform, StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      height: scale(50),
      gap: scale(3)
    },
    label: {
      fontSize: scale(10),
      color: colors.text,
      fontWeight: "bold"
    },
    requiredStar: {
      color: colors.error,
      fontSize: scale(11)
    },
    inputWrapper: {
      flex: 1,
      backgroundColor: colors.card,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: scale(1),
      borderColor: colors.border,
      borderRadius: scale(6),
      paddingHorizontal: scale(12),
      paddingVertical: Platform.OS === "ios" ? scale(6) : undefined,
      gap: scale(12)
    },
    input: {
      flex: 1,
      height: "100%",
      fontSize: scale(14),
      color: colors.text,
      textAlign: I18nManager.isRTL ? "right" : "left",
      writingDirection: I18nManager.isRTL ? "rtl" : "ltr"
    }
  });

  return {styles, colors};
};

export default useStyle;
