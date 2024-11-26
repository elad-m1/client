import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import React, {FC, ReactNode} from "react";
import {
  I18nManager,
  Pressable,
  Text as RNText,
  StyleProp,
  View,
  ViewStyle
} from "react-native";

import {scale} from "@/utils/sizing";
import {Setting as SettingType} from "@/utils/types";

import {useStyle} from "./hooks";

interface Props extends SettingType {
  style?: StyleProp<ViewStyle>;
}

const Setting: FC<Props> = ({icon, text, endElement, onPress, style}) => {
  const {styles, colors} = useStyle();

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={({pressed}) => [
        styles.mainWrapper,
        style,
        {opacity: pressed ? 0.5 : 1}
      ]}>
      <View style={styles.iconTextWrapper}>
        <FontAwesomeIcon icon={icon} color={colors.text} size={scale(16)} />
        <RNText style={styles.text}>{text}</RNText>
      </View>
      {endElement}
      {onPress && (
        <FontAwesomeIcon
          icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
          color={colors.text}
          size={scale(14)}
        />
      )}
    </Pressable>
  );
};

export default Setting;
