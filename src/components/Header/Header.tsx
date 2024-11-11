import {FC, useContext} from 'react';
import {
  Pressable,
  View,
  I18nManager,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import ThemeContext from '@/context/theme/ThemeContext';
import {scale} from '@/utils/sizing';
import useMisc from './hooks/useMisc';

interface Props {
  title: string;
  translucent?: boolean;
  backOnPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const Header: FC<Props> = ({title, translucent, backOnPress, style}) => {
  const {styles} = useMisc();

  const {colors} = useContext(ThemeContext);

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <View
      style={[styles.mainWrapper, translucent && styles.translucent, style]}>
      <Pressable
        onPress={backOnPress ?? goBack}
        style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
        <FontAwesomeIcon
          icon={I18nManager.isRTL ? 'chevron-right' : 'chevron-left'}
          color={translucent ? colors.onPrimary : colors.text}
          size={scale(18)}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
