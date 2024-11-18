import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the ChooseDate screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      paddingHorizontal: scale(24),
      paddingVertical: scale(16),
      gap: scale(12)
    },
    title: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold"
    },
    sectionsWrapper: {
      gap: scale(8)
    },
    sectionWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    sectionName: {
      color: colors.textSecondary,
      fontSize: scale(14)
    },
    sectionPrice: {
      color: colors.text,
      fontSize: scale(14)
    },
    total: {
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useStyle;
