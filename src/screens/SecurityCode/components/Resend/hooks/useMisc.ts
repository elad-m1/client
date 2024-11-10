import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const {bottom} = useSafeAreaInsets();

  const styles = StyleSheet.create({
    titleWrapper: {
      width: '100%',
      alignItems: 'center',
      rowGap: scale(16),
      marginTop: SCREEN_HEIGHT * 0.1,
      marginBottom: SCREEN_HEIGHT * 0.065,
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: 'bold',
    },
    subTitle: {
      color: colors.textSecondary,
      fontSize: scale(12),
    },
    cell: {
      width: SCREEN_WIDTH * 0.13,
      paddingVertical: scale(16),
      includeFontPadding: false,
      fontSize: scale(18),
      fontWeight: 'bold',
      color: colors.text,
      borderWidth: scale(1),
      borderRadius: scale(4),
      borderColor: colors.border,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    focusCell: {
      borderColor: colors.primary,
    },
    errorCell: {
      borderColor: colors.error,
      color: colors.error,
    },
    errorText: {
      color: colors.error,
      marginTop: scale(24),
      textAlign: 'center',
    },
    resendWrapper: {
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: bottom * 1.5,
    },
    resendText: {
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: scale(16),
      marginStart: scale(8),
    },
  });

  return {styles, colors};
};

export default useMisc;
