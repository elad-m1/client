import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";
import {FC, memo, useContext} from "react";
import {
  I18nManager,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  title: string;
  translucent?: boolean;
  icon?: IconProp;
  backOnPress?: () => void;
  backButtonBackground?: boolean;
  hideBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SimpleHeader: FC<Props> = memo(
  ({
    title,
    translucent,
    icon,
    backOnPress,
    backButtonBackground,
    hideBackButton,
    style
  }) => {
    const {styles} = useStyle();

    const {colors} = useContext(ThemeContext);

    const navigation = useNavigation();
    const goBack = () => navigation.goBack();

    const {top} = useSafeAreaInsets();

    return (
      <View
        style={[
          styles.mainWrapper,
          translucent && styles.translucent,
          backButtonBackground && styles.smallPaddingTop,
          style
        ]}>
        {!hideBackButton && (
          <Pressable
            onPress={backOnPress ?? goBack}
            style={({pressed}) => [
              backButtonBackground && styles.backButton,
              {opacity: pressed ? 0.5 : 1, zIndex: 1}
            ]}>
            <FontAwesomeIcon
              icon={
                icon
                  ? icon
                  : I18nManager.isRTL
                  ? "chevron-right"
                  : "chevron-left"
              }
              color={translucent ? colors.onPrimary : colors.text}
              size={scale(16)}
            />
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
);

export default SimpleHeader;
