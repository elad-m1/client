import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      padding: scale(21)
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    name: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold",
      textAlign: "left"
    },
    priceWrapper: {
      backgroundColor: `${colors.primary}45`,
      paddingHorizontal: scale(10),
      paddingVertical: scale(5),
      borderRadius: scale(6)
    },
    price: {
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    },
    category: {
      color: colors.text,
      fontSize: scale(16),
      textAlign: "left"
    },
    credits: {
      color: colors.text,
      fontSize: scale(12),
      textAlign: "left"
    }
  });

  return {colors, styles};
};

export default useMisc;
