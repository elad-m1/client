import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      padding: scale(8),
      backgroundColor: colors.card,
      borderRadius: scale(20),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2
    },
    icon: {}
  });

  return {styles, colors};
};

export default useMisc;
