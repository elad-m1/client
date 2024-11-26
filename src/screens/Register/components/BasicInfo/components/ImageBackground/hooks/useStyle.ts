import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    imageWrapper: {
      height: "55%"
    },
    image: {
      height: "100%",
      backgroundColor: `${colors.primary}45`
    },
    imageForeground: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "#00000045"
    },
    imageTitle: {
      color: colors.onPrimary,
      fontSize: scale(28),
      fontWeight: "bold",
      position: "absolute",
      bottom: scale(32),
      left: scale(21)
    }
  });

  return {styles, colors};
};

export default useStyle;
