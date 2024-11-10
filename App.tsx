import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from 'react-native-system-navigation-bar';

import {ThemeProvider} from '@/context/theme/ThemeContext';
import {AuthProvider} from '@/context/auth/AuthContext';
import {NavContainer} from '@/navigation';
import '@/utils/icons';

function App(): React.JSX.Element {
  NavBar.setNavigationColor('#00000000', 'dark', 'both');

  return (
    <GestureHandlerRootView>
      <ThemeProvider>
        <AuthProvider>
          <NavContainer />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
