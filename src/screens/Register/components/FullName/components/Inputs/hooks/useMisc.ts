import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {scale} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    scrollView: {
      marginTop: scale(-12),
      backgroundColor: colors.card,
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12),
    },
    scrollViewContent: {
      padding: scale(24),
      gap: scale(24),
    },
  });

  return {styles, colors};
};

export default useMisc;
