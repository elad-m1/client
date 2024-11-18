import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: scale(12),
      backgroundColor: colors.background,
      paddingHorizontal: scale(21),
      paddingVertical: scale(16)
    },
    image: {
      width: scale(100),
      height: scale(100),
      borderRadius: scale(8),
      backgroundColor: colors.card
    },
    infoWrapper: {
      flex: 1,
      height: "100%",
      justifyContent: "space-between"
    },
    namePriceWrapper: {
      gap: scale(8)
    },
    name: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    price: {
      color: colors.textSecondary,
      fontSize: scale(14),
      textAlign: "left"
    },
    quantityWrapper: {
      flexDirection: "row",
      alignItems: "center",
      gap: scale(16)
    },
    quantity: {
      color: colors.textSecondary,
      fontSize: scale(14),
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useStyle;
