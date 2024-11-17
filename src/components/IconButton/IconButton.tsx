import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {
  Pressable,
  Text as RNText,
  StyleProp,
  View,
  ViewStyle
} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  onPress: () => void;
  icon: IconProp;
  mode: "text" | "contained";
  size?: number;
  color?: string;
  badge?: number;
  elevation?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const IconButton: FC<Props> = memo(
  ({onPress, icon, mode, size, color, badge, elevation, disabled, style}) => {
    const {styles, colors} = useStyle();
    return (
      <Pressable
        style={({pressed}) => [
          styles.mainWrapper,
          mode === "text" && styles.transparentBackground,
          elevation === false && styles.noElevation,
          {opacity: pressed ? 0.65 : 1},
          style,
          disabled && styles.disabled
        ]}
        disabled={disabled}
        onPress={onPress}>
        <FontAwesomeIcon
          icon={icon}
          color={color ?? colors.text}
          size={size ?? scale(16)}
          style={styles.icon}
        />
        {badge && (
          <View style={[styles.badgeWrapper, disabled && styles.disabled]}>
            <RNText style={styles.badge}>{badge}</RNText>
          </View>
        )}
      </Pressable>
    );
  }
);

export default IconButton;
