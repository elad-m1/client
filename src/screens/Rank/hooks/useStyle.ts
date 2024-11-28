import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

/**
 * Provides styling and colors for the ChooseDate screen.
 *
 * @returns {{styles: Record<string, ViewStyle>, colors: ThemeColors}}
 */
const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.background
    },
    title: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "center"
    },
    ranksWrapper: {
      padding: scale(12),
      gap: scale(12)
    },
    rankWrapper: {
      flexDirection: "row",
      alignItems: "center"
    },
    rankTitle: {
      flex: 1,
      color: colors.text,
      fontSize: scale(16),
      fontWeight: "bold",
      textAlign: "left"
    },
    rankDescription: {
      flex: 1,
      color: colors.text,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "left"
    }
  });

  return {styles, colors};
};

export default useStyle;
