import {useContext} from 'react';

import ThemeContext from '@/context/theme/ThemeContext';
import {StyleSheet} from 'react-native';

const useMisc = () => {
  const {colors} = useContext(ThemeContext);

  const styles = StyleSheet.create({
    mainWrapper: {
      flex: 1,
    },
  });

  return {colors, styles};
};

export default useMisc;
