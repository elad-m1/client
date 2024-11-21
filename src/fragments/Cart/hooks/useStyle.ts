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
      backgroundColor: colors.background
    },
    header: {
      backgroundColor: colors.background,
      borderRadius: scale(16)
    },
    scrollView: {
      paddingBottom: bottom * 1.5 || scale(40)
    },
    checkoutButton: {
      position: "absolute",
      width: "90%",
      bottom: bottom * 1.25 || scale(10),
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4
    }
  });

  return {styles, colors};
};

export default useStyle;
