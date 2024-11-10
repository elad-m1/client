import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {scale, SCREEN_WIDTH} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
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
  });

  return {styles, colors};
};

export default useMisc;
