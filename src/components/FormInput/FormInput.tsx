import {FC} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {scale} from '@/utils/sizing';
import useMisc from './hooks/useMisc';

interface Props {
  label?: string;
  icon?: IconProp;
  endIcon?: IconProp;
  required?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const FormInput: FC<Props & TextInputProps> = props => {
  const {styles, colors} = useMisc();
  return (
    <View style={[styles.mainWrapper, props.style]}>
      {props.label && (
        <View style={{flexDirection: 'row', gap: scale(2)}}>
          <Text style={styles.label}>{props.label}</Text>
          {props.required && <Text style={styles.requiredStar}>*</Text>}
        </View>
      )}
      <View style={styles.inputWrapper}>
        {props.icon && (
          <FontAwesomeIcon
            icon={props.icon}
            color={colors.placeholder}
            size={scale(14)}
          />
        )}
        <TextInput
          {...props}
          placeholderTextColor={colors.placeholder}
          style={[styles.input, props.inputStyle]}
        />
        {props.endIcon && (
          <FontAwesomeIcon
            icon={props.endIcon}
            color={colors.text}
            size={scale(14)}
          />
        )}
        {/* {props.secureTextEntry && (
          <IconBu WE NEED TO MAKE AN ICON BUTTON
        )} */}
      </View>
    </View>
  );
};

export default FormInput;
