import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
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
    }
  });

  return {styles};
};

export default useMisc;
