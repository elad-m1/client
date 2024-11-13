import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the Appointments screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      paddingHorizontal: scale(32)
    },
    nextAppointmentTitle: {
      color: colors.text,
      fontSize: scale(18),
      fontWeight: "bold"
    },
    nextAppointmentDetailWrapper: {
      gap: scale(4),
      marginTop: scale(8)
    },
    nextAppointmentDetail: {
      color: colors.text,
      fontSize: scale(14),
      textAlign: "left"
    },
    lastAppointmentsWrapper: {
      gap: scale(12)
    }
  });

  return {styles, colors};
};

export default useMisc;
