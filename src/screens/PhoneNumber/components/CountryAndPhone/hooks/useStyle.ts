import {useContext} from "react";
import {I18nManager, StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

export default function useStyle() {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    phoneNumberWrapper: {
      alignItems: "center",
      rowGap: scale(16)
    },
    phoneNumberCountryCode: {
      fontSize: scale(16),
      color: colors.text,
      marginStart: scale(12)
    },
    phoneNumberInput: {
      width: SCREEN_WIDTH * 0.8,
      backgroundColor: colors.card,
      borderRadius: scale(8),
      borderWidth: scale(1.5),
      borderColor: colors.border,
      paddingHorizontal: scale(12),
      paddingVertical: scale(6),
      includeFontPadding: false,
      fontSize: scale(16),
      color: colors.text,
      textAlign: "center",
      writingDirection: I18nManager.isRTL ? "rtl" : "rtl"
    }
  });

  return {styles, colors};
}
