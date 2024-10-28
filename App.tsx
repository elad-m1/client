import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from 'react-native-system-navigation-bar';

import Verification from './src/screens/Verification/Verification';
import {defaultColors} from './src/screens/Verification/context/colors';
import {ToastAndroid} from 'react-native';

function App(): React.JSX.Element {
  NavBar.setNavigationColor('#00000000');
  NavBar.setBarMode('dark', 'both');
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Verification
          colors={defaultColors}
          onSubmit={() => ToastAndroid.show('SUBMITTED', ToastAndroid.SHORT)}
          sendVerifCode={() => {}}
          translucent
        />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
