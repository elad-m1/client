import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {scale, SCREEN_WIDTH} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    mainWrapper: {
      width: SCREEN_WIDTH,
      backgroundColor: colors.card,
      paddingBottom: bottom * 2,
    },
    scrollView: {
      marginTop: scale(-12),
      backgroundColor: colors.card,
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12),
    },
  });

  return {styles, colors};
};

export default useMisc;
