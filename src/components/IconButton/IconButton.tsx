import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {Pressable, StyleProp, ViewStyle} from "react-native";

import {scale} from "@/utils/sizing";

import useMisc from "./hooks/useMisc";

interface Props {
  onPress: () => void;
  icon: IconProp;
  size?: number;
  color?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const IconButton: FC<Props> = memo(
  ({onPress, icon, size, color, disabled, style}) => {
    const {styles, colors} = useMisc();
    return (
      <Pressable
        style={({pressed}) => [
          styles.mainWrapper,
          {opacity: pressed ? 0.65 : 1},
          style
        ]}
        onPress={onPress}>
        <FontAwesomeIcon
          icon={icon}
          color={color ?? colors.text}
          size={size ?? scale(14)}
          style={styles.icon}
        />
      </Pressable>
    );
  }
);

export default IconButton;
