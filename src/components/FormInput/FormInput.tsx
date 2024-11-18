import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {
  Pressable,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from "react-native";

import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  label?: string;
  icon?: IconProp;
  endIcon?: IconProp;
  required?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FormInput: FC<Props & TextInputProps> = memo(
  ({
    style,
    label,
    required,
    icon,
    onPress,
    inputStyle,
    endIcon,
    ...inputProps
  }) => {
    const {styles, colors} = useStyle();
    const Wrapper = onPress ? Pressable : View;
    return (
      <Wrapper
        onPress={onPress}
        style={({pressed}) => [style, {opacity: pressed ? 0.5 : 1}]}>
        <View
          style={styles.mainWrapper}
          pointerEvents={onPress ? "none" : "auto"}>
          {label && (
            <View style={{flexDirection: "row", gap: scale(2)}}>
              <Text style={styles.label}>{label}</Text>
              {required && <Text style={styles.requiredStar}>*</Text>}
            </View>
          )}
          <View style={styles.inputWrapper}>
            {icon && (
              <FontAwesomeIcon
                icon={icon}
                color={colors.placeholder}
                size={scale(14)}
              />
            )}
            <TextInput
              {...inputProps}
              placeholderTextColor={colors.placeholder}
              style={[styles.input, inputStyle]}
            />
            {endIcon && (
              <FontAwesomeIcon
                icon={endIcon}
                color={colors.text}
                size={scale(14)}
              />
            )}
            {/* {props.secureTextEntry && (
          <IconBu WE NEED TO MAKE AN ICON BUTTON
        )} */}
          </View>
        </View>
      </Wrapper>
    );
  }
);

export default FormInput;
