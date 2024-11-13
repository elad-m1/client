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
      flex: 1
    },
    image: {
      width: "100%",
      height: scale(300),
      backgroundColor: `${colors.primary}45`
    },
    closeButton: {
      position: "absolute",
      top: top + scale(8),
      left: scale(16)
    },
    infoWrapper: {
      flex: 1,
      backgroundColor: colors.card,
      borderTopStartRadius: scale(12),
      borderTopEndRadius: scale(12),
      marginTop: scale(-12)
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold",
      marginTop: scale(16),
      paddingHorizontal: scale(24),
      textAlign: "left"
    },
    price: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold",
      marginTop: scale(8),
      paddingHorizontal: scale(24),
      textAlign: "left"
    }
  });

  return {colors, styles};
};

export default useMisc;
