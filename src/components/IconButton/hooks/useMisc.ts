import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      padding: scale(8),
      backgroundColor: colors.card,
      borderRadius: scale(20),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2
    },
    disabled: {
      backgroundColor: colors.placeholder
    },
    transparentBackground: {
      backgroundColor: "transparent"
    },
    noElevation: {
      elevation: 0,
      shadowRadius: 0
    },
    icon: {},
    badgeWrapper: {
      direction: "ltr",
      position: "absolute",
      top: scale(-4),
      right: scale(-4),
      width: scale(16),
      height: scale(16),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary,
      borderRadius: scale(8)
    },
    badge: {
      color: colors.onPrimary,
      fontSize: scale(8),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useMisc;
