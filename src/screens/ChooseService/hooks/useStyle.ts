import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the ChooseService screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.background,
      paddingBottom: bottom * 1.5 || scale(25)
    },
    chooseBarber: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.card,
      padding: scale(8),
      borderRadius: scale(6),
      marginHorizontal: scale(42),
      textAlign: "left",
      borderWidth: scale(1.5),
      borderColor: colors.border
    },
    servicesHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: scale(8),
      alignItems: "center"
    },
    selectServices: {
      marginTop: scale(32),
      color: colors.text,
      fontSize: scale(16),
      marginHorizontal: scale(28)
    },
    servicesSum: {
      marginTop: scale(32),
      color: colors.textSecondary,
      fontSize: scale(14),
      marginHorizontal: scale(28)
    },
    service: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: scale(28),
      backgroundColor: colors.card,
      padding: scale(8),
      borderRadius: scale(6),
      borderWidth: scale(1.5)
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

export default useStyle;
