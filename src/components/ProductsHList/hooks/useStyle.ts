import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {},
    title: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "600",
      paddingHorizontal: scale(12),
      paddingTop: scale(8),
      textAlign: "left"
    },
    scrollView: {
      paddingVertical: scale(8),
      paddingHorizontal: scale(12),
      gap: scale(12)
    }
  });

  return {styles};
};

export default useStyle;
