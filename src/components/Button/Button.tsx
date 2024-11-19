import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  onPress: () => void;
  backgroundColor?: string;
  icon?: IconProp;
  iconSize?: number;
  iconColor?: string;
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<Props> = memo(
  ({
    onPress,
    backgroundColor,
    icon,
    iconSize,
    iconColor,
    text,
    disabled,
    style,
    textStyle
  }) => {
    const {styles, colors} = useStyle();
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({pressed}) => [style, {opacity: pressed ? 0.5 : 1}]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.85, y: 0}}
          colors={
            disabled
              ? [colors.placeholder, colors.placeholder]
              : backgroundColor
              ? [backgroundColor, backgroundColor]
              : [colors.primary, colors.accent]
          }
          style={styles.mainWrapper}>
          <View style={styles.contentWrapper}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                color={iconColor ?? colors.onPrimary}
                size={iconSize ?? scale(12)}
              />
            )}
          </View>
        </LinearGradient>
      </Pressable>
    );
  }
);

export default Button;
