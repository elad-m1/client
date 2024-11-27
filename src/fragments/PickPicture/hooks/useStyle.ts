import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.card,
      borderTopStartRadius: scale(12),
      borderTopEndRadius: scale(12),
      paddingTop: scale(8)
    },
    optionWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      direction: "ltr",
      paddingHorizontal: scale(24),
      paddingVertical: scale(16)
    },
    text: {
      color: colors.text,
      fontSize: scale(18),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useStyle;
