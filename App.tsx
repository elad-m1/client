import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from 'react-native-system-navigation-bar';

import Verification from './src/screens/Verification/Verification';
import {defaultColors} from './src/screens/Verification/context/colors';
import {ToastAndroid} from 'react-native';

function App(): React.JSX.Element {
  const [codeError, setCodeError] = useState(false);
  const submitCode = (resolve: () => void) =>
    setTimeout(() => {
      setCodeError(new Date().getTime() % 2 === 0);
      resolve();
    }, 1000);

  const onSubmit = () =>
    new Promise<void>(resolve => {
      ToastAndroid.show('SUBMITTED', ToastAndroid.SHORT);
      submitCode(resolve);
    });

  NavBar.setNavigationColor('#00000000', 'dark', 'both');
  // NavBar.setNavigationColor('#00000000', 'light', 'both');

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Verification
          colors={{
            ...defaultColors,
            primary: '#09B859',
            // DARK THEME
            // background: '#101010',
            // card: '#252525',
            // text: '#fff',
            // subText: '#959595',
            // border: '#454545',
          }}
          onSubmit={onSubmit}
          sendVerifCode={() => {}}
          codeError={codeError}
          translucent
        />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
