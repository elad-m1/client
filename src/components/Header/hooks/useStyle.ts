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
      justifyContent: "space-between",
      alignItems: "flex-start",
      paddingTop: top + scale(6),
      paddingBottom: scale(12),
      paddingHorizontal: scale(24),
      zIndex: 1
    },
    buttonSection: {
      flexDirection: "row",
      alignItems: "center",
      gap: scale(12)
    },
    button: {
      backgroundColor: colors.card
    },
    logo: {
      position: "absolute",
      top: top + scale(6),
      right: scale(16),
      width: SCREEN_WIDTH * 0.275,
      height: SCREEN_WIDTH * 0.275,
      borderRadius: SCREEN_WIDTH * 0.135,
      borderWidth: scale(6),
      borderColor: colors.background
    }
  });

  return {styles, colors};
};

export default useStyle;
