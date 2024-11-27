import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.background
    },
    cartEmpty: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: scale(16)
    }
  });

  return {styles, colors};
};

export default useStyle;
