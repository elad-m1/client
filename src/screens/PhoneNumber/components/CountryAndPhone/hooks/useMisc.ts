import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {scale, SCREEN_WIDTH} from '@utils/sizing';
import ThemeContext from '@context/theme/themeContext';

export default function useMisc() {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    phoneNumberWrapper: {
      alignItems: 'center',
      rowGap: scale(16),
    },
    phoneNumberCountryCode: {
      fontSize: scale(16),
      color: colors.text,
      marginStart: scale(12),
    },
    phoneNumberInput: {
      width: SCREEN_WIDTH * 0.8,
      backgroundColor: colors.card,
      borderRadius: scale(8),
      borderWidth: scale(1.5),
      borderColor: colors.border,
      paddingHorizontal: scale(12),
      fontSize: scale(16),
      color: colors.text,
    },
  });

  return {styles, colors};
}
