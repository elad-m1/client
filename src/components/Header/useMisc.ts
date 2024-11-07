import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {scale} from '@utils/sizing';
import ThemeContext from '@context/theme/themeContext';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      paddingVertical: scale(12),
      paddingHorizontal: scale(24),
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
