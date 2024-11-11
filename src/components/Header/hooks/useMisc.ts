import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {scale} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
      paddingTop: top + scale(12),
      zIndex: 1,
    },
    translucent: {
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: scale(17),
      color: colors.text,
      fontWeight: '600',
      marginInline: 'auto',
    },
  });

  return {styles};
};

export default useMisc;
