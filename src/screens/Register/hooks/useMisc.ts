import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import ThemeContext from '@/context/theme/ThemeContext';
import {scale} from '@/utils/sizing';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
    title: {
      color: colors.text,
      fontSize: scale(21),
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: scale(12),
      marginBottom: scale(24),
    },
  });

  return {colors, styles};
};

export default useMisc;