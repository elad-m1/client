import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ColorsContext from '../../context/colors';
import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/sizing';

const useMisc = () => {
  const colors = useContext(ColorsContext);

  const {bottom} = useSafeAreaInsets();

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
    cell: {
      width: SCREEN_WIDTH * 0.125,
      paddingVertical: scale(6),
      includeFontPadding: false,
      fontSize: scale(21),
      borderWidth: scale(2),
      borderRadius: scale(8),
      borderColor: colors.border,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    focusCell: {
      borderColor: colors.primary,
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
