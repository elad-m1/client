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
      padding: scale(12),
      gap: scale(21)
    },
    title: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold"
    },
    columnsWrapper: {
      flexDirection: "row",
      backgroundColor: colors.background,
      gap: scale(12),
      paddingBottom: bottom * 1.5 || scale(40)
    },
    column: {
      flex: 1,
      gap: scale(12)
    }
  });

  return {styles, colors};
};

export default useStyle;
