import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {BottomSheetTextInput} from "@gorhom/bottom-sheet";
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
  bottomSheet?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FormInput: FC<Props & TextInputProps> = memo(
  ({
    style,
    label,
    required,
    icon,
    endIcon,
    bottomSheet,
    onPress,
    inputStyle,
    editable,
    ...inputProps
  }) => {
    const {styles, colors} = useStyle();
    const Input = bottomSheet ? BottomSheetTextInput : TextInput;
    return (
      <Pressable
        onPress={onPress}
        disabled={!onPress || editable === false}
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
          <View
            style={[
              styles.inputWrapper,
              {
                backgroundColor:
                  editable === false ? `${colors.placeholder}35` : colors.card
              }
            ]}>
            <Input
              {...inputProps}
              placeholderTextColor={colors.placeholder}
              editable={editable}
              style={[
                styles.input,
                inputStyle,
                {color: editable === false ? colors.placeholder : colors.text}
              ]}
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
      </Pressable>
    );
  }
);

export default FormInput;
