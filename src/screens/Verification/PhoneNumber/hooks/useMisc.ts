import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/sizing';
import ColorsContext from '../../context/colors';

const useMisc = () => {
  const colors = useContext(ColorsContext);

  const styles = StyleSheet.create({
    titleWrapper: {
      width: '100%',
      alignItems: 'center',
      rowGap: scale(16),
      marginVertical: SCREEN_HEIGHT * 0.1,
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: 'bold',
    },
    subTitle: {
      color: colors.subText,
      fontSize: scale(12),
    },
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
    nextButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primary,
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
      borderRadius: scale(8),
    },
    nextButtonText: {
      color: colors.onPrimary,
      fontSize: scale(15),
      fontWeight: 'bold',
      marginEnd: scale(4),
      includeFontPadding: false,
    },
  });

  return {styles};
};

export default useMisc;
