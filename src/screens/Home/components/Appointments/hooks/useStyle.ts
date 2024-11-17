import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the Appointments screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      gap: scale(12)
    },
    sectionTitle: {
      color: colors.text,
      fontSize: scale(18),
      fontWeight: "bold",
      marginHorizontal: scale(16)
    },
    nextAppointmentWrapper: {},
    nextAppointmentDetailWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.card,
      paddingHorizontal: scale(16),
      paddingVertical: scale(10),
      borderRadius: scale(6),
      gap: scale(4),
      marginHorizontal: scale(18)
    },
    nextAppointmentWhen: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    nextAppointmentWhere: {
      color: colors.text,
      fontSize: scale(12),
      textAlign: "left"
    },
    lastAppointmentsWrapper: {},
    lastAppointmentsListWrapper: {
      gap: scale(12),
      marginHorizontal: scale(18)
    }
  });

  return {styles, colors};
};

export default useStyle;
