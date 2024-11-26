import {useContext} from "react";
import {StyleSheet} from "react-native";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1
    },
    sectionsWrapper: {
      marginVertical: scale(24),
      gap: scale(24)
    }
  });

  return {styles, colors};
};

export default useStyle;
