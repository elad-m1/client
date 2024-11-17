import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.background
    }
  });

  return {styles, colors};
};

export default useStyle;
