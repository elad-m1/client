import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      height: "100%",
      backgroundColor: colors.card,
      borderRadius: scale(12),
      overflow: "hidden"
    },
    description: {
      color: colors.text,
      fontSize: 16,
      textAlign: "left",
      paddingHorizontal: scale(24)
    }
  });

  return {colors, styles};
};

export default useStyle;
