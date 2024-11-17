import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: scale(28),
      backgroundColor: colors.card,
      borderWidth: scale(1),
      borderColor: colors.border,
      borderRadius: scale(6),
      gap: scale(14)
    },
    active: {
      borderColor: colors.primary
    },
    text: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  return {styles, colors};
};

export default useStyle;
