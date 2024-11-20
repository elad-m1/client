import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.background,
      width: SCREEN_WIDTH,
      paddingHorizontal: scale(12),
      paddingBottom: scale(8)
    }
  });

  return {styles, colors};
};

export default useStyle;
