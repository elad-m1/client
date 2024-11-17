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
      backgroundColor: colors.background,
      paddingBottom: bottom
    },
    calendar: {
      backgroundColor: colors.background,
      marginHorizontal: scale(24),
      marginTop: scale(16),
      marginBottom: scale(24)
    },
    choose_time: {
      color: colors.text,
      fontSize: scale(14),
      fontWeight: "bold",
      textAlign: "left"
    },
    timeTag: {
      paddingHorizontal: scale(10),
      paddingVertical: scale(5),
      borderRadius: scale(6),
      borderWidth: scale(1),
      borderColor: colors.border,
      marginBottom: 40
    },
    timeTagText: {
      fontSize: scale(14),
      fontWeight: "bold"
    }
  });

  return {styles, colors};
};

export default useStyle;
