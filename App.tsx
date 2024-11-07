import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavBar from 'react-native-system-navigation-bar';

import ThemeContext from '@context/theme/themeContext';
import useTheme from '@context/theme/useTheme';
import Verification from './src/navigation/Verification/Verification';
import {defaultColors} from './src/navigation/Verification/context/colors';

function App(): React.JSX.Element {
  const theme = useTheme();
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
      <ThemeContext.Provider value={theme}>
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
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
}

export default App;
