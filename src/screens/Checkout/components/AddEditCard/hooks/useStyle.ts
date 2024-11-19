import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {SCREEN_HEIGHT, SCREEN_WIDTH, scale} from "@/utils/sizing";

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
      borderTopLeftRadius: scale(12),
      borderTopRightRadius: scale(12),
      paddingBottom: bottom * 1.25
    },
    submitButton: {
      width: "85%",
      alignSelf: "center"
    }
  });

  return {styles, colors};
};

export default useStyle;
