import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the ChooseService screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    chooseBarber: {
      backgroundColor: colors.card,
      padding: scale(8),
      borderRadius: scale(6),
      textAlign: "left"
    },
    service: {
      backgroundColor: colors.card,
      padding: scale(8),
      borderRadius: scale(6),
      borderWidth: scale(1.5),
      textAlign: "left"
    },
    dropdownWrapper: {
      borderRadius: scale(12)
    },
    dropdownItemWrapper: {
      backgroundColor: colors.card,
      paddingHorizontal: scale(12),
      paddingVertical: scale(12)
    },
    dropdownItemText: {
      color: colors.text,
      fontSize: scale(14),
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useMisc;
