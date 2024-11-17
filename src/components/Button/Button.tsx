import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  onPress: () => void;
  icon?: IconProp;
  iconSize?: number;
  iconColor?: string;
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = memo(
  ({onPress, icon, iconSize, iconColor, text, disabled, style, textStyle}) => {
    const {styles, colors} = useStyle();
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.mainWrapper,
          disabled && styles.disabled,
          style,
          {opacity: pressed ? 0.65 : 1}
        ]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            color={iconColor ?? colors.onPrimary}
            size={iconSize ?? scale(12)}
          />
        )}
      </Pressable>
    );
  }
);

export default Button;
