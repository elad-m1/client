import {FC, memo} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';

import useMisc from './hooks/useMisc';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {scale} from '@/utils/sizing';

interface Props {
  onPress: () => void;
  icon?: IconProp;
  iconSize?: number;
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<Props> = memo(
  ({onPress, icon, iconSize, text, disabled, style}) => {
    const {styles, colors} = useMisc();
    return (
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.mainWrapper,
          disabled && styles.disabled,
          style,
          {opacity: pressed ? 0.65 : 1},
        ]}>
        <Text style={styles.text}>{text}</Text>
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            color={colors.onPrimary}
            size={iconSize ?? scale(12)}
          />
        )}
      </Pressable>
    );
  },
);

export default Button;
