import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const {top} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      alignItems: "center",
      marginTop: scale(16)
    },
    profileImage: {
      height: scale(120),
      width: scale(120),
      borderRadius: scale(60),
      backgroundColor: colors.card,
      borderWidth: scale(1),
      borderColor: colors.border
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: "bold",
      marginTop: scale(16)
    }
  });

  return {styles, colors};
};

export default useMisc;
