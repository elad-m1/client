import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

function App(): React.JSX.Element {
  const loggedIn = false;
  return (
    <NavigationContainer>
      {loggedIn ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
