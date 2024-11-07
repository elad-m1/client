import {useState} from 'react';
import {Appearance} from 'react-native';

import {darkTheme, lightTheme} from './themes';

export default function useTheme() {
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === 'dark');

  const toggleTheme = () => setIsDark(currentValue => !currentValue);

  const colors = isDark ? darkTheme : lightTheme;

  return {isDark, toggleTheme, colors};
}
