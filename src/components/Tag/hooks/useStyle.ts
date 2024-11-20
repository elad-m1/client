import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.card,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: scale(6),
      paddingHorizontal: scale(10),
      borderRadius: scale(12),
      gap: scale(8),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
      elevation: 1
    },
    active: {
      backgroundColor: colors.primary
    },
    text: {
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    }
  });

  return {styles};
};

export default useStyle;
