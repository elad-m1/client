import {FC} from "react";
import {Pressable, Text as RNText, StyleProp, ViewStyle} from "react-native";

import {useStyle} from "./hooks";

interface Props {
  onPress?: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const Tag: FC<Props> = ({onPress, text, style}) => {
  const {styles} = useStyle();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.mainWrapper,
        style,
        {opacity: pressed ? 0.5 : 1}
      ]}>
      <RNText style={styles.text}>{text}</RNText>
    </Pressable>
  );
};

export default Tag;
