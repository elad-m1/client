import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      height: scale(42),
      backgroundColor: colors.card,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: scale(16),
      paddingVertical: scale(12)
    },
    iconTextWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingStart: scale(4),
      gap: scale(12)
    },
    text: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left",
      textAlignVertical: "center"
    }
  });

  return {styles, colors};
};

export default useStyle;
