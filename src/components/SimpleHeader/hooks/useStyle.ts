import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
      paddingTop: top + scale(12)
    },
    translucent: {
      position: "absolute",
      backgroundColor: "transparent"
    },
    smallPaddingTop: {
      paddingTop: top + scale(6)
    },
    backButton: {
      backgroundColor: colors.card,
      padding: scale(8),
      borderRadius: scale(16)
    },
    title: {
      width: SCREEN_WIDTH * 0.35,
      marginStart: "auto",
      marginEnd: (SCREEN_WIDTH - scale(48)) / 2 - SCREEN_WIDTH * 0.175,
      fontSize: scale(17),
      color: colors.text,
      fontWeight: "600",
      textAlign: "center"
    }
  });

  return {styles};
};

export default useStyle;
