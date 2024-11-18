import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {Pressable, Text as RNText, StyleProp, ViewStyle} from "react-native";

import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {
  onPress: () => void;
  active: boolean;
  text: string;
  icon?: IconProp;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CardOption: FC<Props> = ({
  onPress,
  active,
  text,
  icon,
  disabled,
  style
}) => {
  const {styles, colors} = useStyle();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.mainWrapper,
        active && styles.active,
        disabled && styles.disabled,
        style,
        {opacity: pressed ? 0.5 : 1}
      ]}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          color={disabled ? colors.placeholder : colors.text}
          size={scale(16)}
        />
      )}
      <RNText style={[styles.text, disabled && {color: colors.placeholder}]}>
        {text}
      </RNText>
    </Pressable>
  );
};

export default CardOption;
