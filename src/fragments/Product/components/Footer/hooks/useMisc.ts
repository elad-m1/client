import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

/**
 * Provides styles and colors for the ImageBackground component.
 *
 * @returns {{styles: Record<string, ViewStyle>}}
 */
const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.card,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "auto",
      marginBottom: bottom,
      paddingHorizontal: scale(12),
      paddingVertical: scale(8),
      gap: scale(12)
    },
    iconButton: {
      backgroundColor: colors.primary,
      borderRadius: scale(8),
      elevation: 0,
      shadowRadius: 0
    }
  });

  return {styles, colors};
};

export default useMisc;
