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
      height: "100%"
    },
    question: {
      color: colors.text,
      fontSize: scale(21),
      textAlign: "center",
      fontWeight: "bold"
    },
    columnsWrapper: {
      flexDirection: "row",
      gap: scale(12),
      paddingHorizontal: scale(16),
      paddingBottom: bottom
    },
    column: {flex: 1, gap: scale(16)},
    nextButton: {
      position: "absolute",
      // bottom: scale(12) + bottom,
      width: "85%",
      alignSelf: "center"
    }
  });

  return {styles};
};

export default useStyle;
