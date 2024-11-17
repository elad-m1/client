import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      width: SCREEN_WIDTH,
      backgroundColor: colors.background,
      paddingBottom: bottom * 2
    },
    scrollView: {
      marginTop: scale(-12),
      backgroundColor: colors.card,
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12)
    }
  });

  return {styles, colors};
};

export default useStyle;
