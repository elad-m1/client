import {useContext, useState} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);

  const {colors} = useContext(ThemeContext);

  const toggleIsDateOpen = () => setIsDateOpen(value => !value);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      marginTop: scale(-12),
      backgroundColor: colors.background,
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12)
    },
    scrollViewContent: {
      padding: scale(24),
      gap: scale(16)
    },
    error: {
      color: colors.error,
      fontSize: scale(12),
      fontWeight: "bold",
      textAlign: "center"
    }
  });

  return {styles, colors, isDateOpen, toggleIsDateOpen};
};

export default useStyle;
