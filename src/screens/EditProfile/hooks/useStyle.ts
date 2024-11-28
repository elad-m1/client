import {useContext} from "react";
import {StyleSheet} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

const useStyle = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
      backgroundColor: colors.background
    },
    formWrapper: {
      flex: 1,
      paddingBottom: bottom * 1.5 || scale(20)
    },
    profileImage: {
      width: scale(120),
      height: scale(120),
      borderRadius: scale(60),
      alignSelf: "center",
      marginVertical: scale(16)
    },
    saveButton: {
      width: "85%",
      alignSelf: "center"
    }
  });

  return {styles, colors, bottom};
};

export default useStyle;
