import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the LastAppointment component.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.card,
      borderRadius: scale(6),
      paddingHorizontal: scale(16),
      paddingVertical: scale(12)
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

export default useStyle;
