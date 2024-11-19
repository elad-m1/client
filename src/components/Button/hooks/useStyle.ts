import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

export default function useStyle() {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      borderRadius: scale(6)
    },
    contentWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: scale(10),
      paddingVertical: scale(6),
      gap: scale(4)
    },
    disabled: {
      backgroundColor: colors.placeholder
    },
    text: {
      color: colors.onPrimary,
      fontSize: scale(14),
      fontWeight: "bold"
    }
  });
  return {styles, colors};
}
