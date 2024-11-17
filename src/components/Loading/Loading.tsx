import {FC, useContext} from "react";
import {ActivityIndicator, View} from "react-native";

import {ThemeContext} from "@/context";

const Loading: FC = () => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
