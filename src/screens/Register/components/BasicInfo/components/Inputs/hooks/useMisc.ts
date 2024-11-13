import {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import {scale} from '@/utils/sizing';
import ThemeContext from '@/context/theme/ThemeContext';

const useMisc = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);

  const {colors} = useContext(ThemeContext);

  const toggleIsDateOpen = () => setIsDateOpen(value => !value);

  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      marginTop: scale(-12),
      backgroundColor: colors.card,
      borderTopRightRadius: scale(12),
      borderTopLeftRadius: scale(12),
    },
    scrollViewContent: {
      padding: scale(24),
      gap: scale(16),
    },
    error: {
      color: colors.error,
      fontSize: scale(12),
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  return {styles, colors, isDateOpen, toggleIsDateOpen};
};

export default useMisc;
