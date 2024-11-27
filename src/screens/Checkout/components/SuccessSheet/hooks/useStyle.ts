import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const {bottom} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {},
    labelsWrapper: {
      paddingHorizontal: scale(24),
      marginTop: scale(-24),
      gap: scale(16)
    },
    success: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold",
      alignSelf: "center"
    },
    detailsLabel: {
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold"
    },
    backHomeButton: {
      width: "85%",
      alignSelf: "center",
      marginTop: scale(24)
    }
  });

  return {styles, colors, bottom};
};

export default useStyle;
