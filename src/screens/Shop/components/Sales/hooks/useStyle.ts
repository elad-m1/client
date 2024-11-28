import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_WIDTH, scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      marginTop: scale(12)
    },
    saleWrapper: {
      height: scale(42),
      width: SCREEN_WIDTH
    },
    saleImage: {
      flex: 1,
      width: SCREEN_WIDTH - scale(32),
      alignSelf: "center",
      backgroundColor: colors.placeholder,
      borderRadius: scale(12),
      overflow: "hidden"
    }
  });

  return {styles, colors};
};

export default useStyle;
