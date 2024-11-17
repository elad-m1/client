import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    dropdownWrapper: {
      borderRadius: scale(12),
      marginTop: scale(2)
    },
    dropdownItemWrapper: {
      paddingHorizontal: scale(12),
      paddingVertical: scale(12)
    },
    dropdownItemText: {
      color: colors.text,
      fontSize: scale(14),
      textAlign: "left"
    }
  });
  return {styles};
};

export default useStyle;
