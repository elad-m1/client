import {useContext} from 'react';
import {StyleSheet} from 'react-native';

import ThemeContext from '@/context/theme/ThemeContext';

export default function useMisc() {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({});
  return {styles, colors};
}
