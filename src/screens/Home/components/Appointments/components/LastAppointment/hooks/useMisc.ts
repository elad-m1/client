import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the LastAppointment component.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: scale(6),
      paddingHorizontal: scale(12),
      paddingVertical: scale(12),
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 3
    },
    row: {
      flexDirection: "row",
      alignItems: "center"
    },
    barber: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    when: {
      color: colors.textSecondary,
      fontSize: scale(12),
      textAlign: "left"
    },
    where: {
      color: colors.text,
      fontSize: scale(12),
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useMisc;
