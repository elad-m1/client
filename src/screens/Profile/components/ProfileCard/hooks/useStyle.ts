import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: scale(24),
      gap: scale(12)
    },
    image: {
      backgroundColor: colors.card,
      width: scale(70),
      height: scale(70),
      borderRadius: scale(35)
    },
    detailsWrapper: {
      gap: scale(4)
    },
    name: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    phoneNumber: {
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    },
    rank: {
      color: colors.primary,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useStyle;
