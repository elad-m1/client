import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
      paddingTop: top + scale(12),
      zIndex: 1
    },
    translucent: {
      position: "absolute",
      backgroundColor: "transparent"
    },
    title: {
      width: scale(100),
      position: "absolute",
      left: "50%",
      transform: [{translateX: scale(50)}],
      fontSize: scale(17),
      color: colors.text,
      fontWeight: "600",
      textAlign: "center"
    }
  });

  return {styles};
};

export default useStyle;
