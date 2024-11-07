import {FC, useContext} from 'react';
import {Pressable, View, I18nManager, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import ColorsContext from '../../navigation/Verification/context/colors';
import TranslucentContext from '../../navigation/Verification/context/translucent';
import {scale} from '../../utils/sizing';
import useMisc from './useMisc';

interface Props {
  title: string;
}

const Header: FC<Props> = ({title}) => {
  const {styles} = useMisc();

  const colors = useContext(ColorsContext);
  const {isTranslucent, toggleTranslucent} = useContext(TranslucentContext);

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.mainWrapper,
        {paddingTop: isTranslucent ? top + scale(12) : scale(12)},
      ]}>
      <Pressable
        onPress={goBack}
        style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
        <FontAwesomeIcon
          icon={I18nManager.isRTL ? faChevronRight : faChevronLeft}
          color={colors.text}
          size={scale(18)}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
