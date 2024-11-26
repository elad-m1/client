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
      top: top || scale(16),
      right: scale(12),
      width: SCREEN_WIDTH * 0.25,
      height: SCREEN_WIDTH * 0.25
    }
  });

  return {styles, colors};
};

export default useStyle;
