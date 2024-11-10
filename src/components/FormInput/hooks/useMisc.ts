import {useContext} from 'react';
import {I18nManager, StyleSheet} from 'react-native';

import ThemeContext from '@/context/theme/ThemeContext';
import {scale} from '@/utils/sizing';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      gap: scale(2),
    },
    label: {
      fontSize: scale(10),
      color: colors.text,
      fontWeight: 'bold',
    },
    requiredStar: {
      color: colors.error,
      fontSize: scale(10),
    },
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: scale(1),
      borderColor: colors.border,
      borderRadius: scale(8),
      paddingHorizontal: scale(12),
      paddingVertical: scale(6),
      gap: scale(12),
    },
    input: {
      flex: 1,
      height: '100%',
      fontSize: scale(14),
      color: colors.text,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    },
  });

  return {styles, colors};
};

export default useMisc;
