import {useContext} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import ThemeContext from '@/context/theme/ThemeContext';
import AuthContext from '@/context/auth/AuthContext';
import AuthNavigator from '../AuthNavigator';

const NavContainer = () => {
  const {isDark, colors} = useContext(ThemeContext);
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <NavigationContainer theme={{dark: isDark, colors: colors}}>
      {isAuthenticated ? (
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>sdfas</View>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default NavContainer;
