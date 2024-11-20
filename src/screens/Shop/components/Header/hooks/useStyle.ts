import {useContext} from "react";
import {I18nManager, Platform, StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const {top, bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.background,
      paddingHorizontal: scale(24),
      paddingTop: top * 1.25,
      paddingBottom: scale(12)
    },
    searchBarWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingHorizontal: scale(16),
      paddingVertical: Platform.OS === "ios" ? scale(8) : scale(4),
      borderRadius: scale(6),
      gap: scale(12),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
      elevation: 1
    },
    searchBarInput: {
      flex: 1,
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: I18nManager.isRTL ? "right" : "left",
      writingDirection: I18nManager.isRTL ? "rtl" : "ltr"
    }
  });

  return {styles, colors};
};

export default useStyle;
