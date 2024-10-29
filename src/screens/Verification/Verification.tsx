import {FC} from 'react';
import ColorsContext, {defaultColors} from './context/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PhoneNumber from './PhoneNumber/PhoneNumber';
import SecurityCode from './SecurityCode/SecurityCode';

import TransluscentContext from './context/translucent';
import useTranslucent from './hooks/useTranslucent';

interface Props {
  colors: typeof defaultColors;
  translucent?: boolean;
  sendVerifCode: (phoneNumber: string) => void;
  onSubmit: () => Promise<void>;
  codeError: boolean;
}

const Stack = createNativeStackNavigator();

export type VerificationStackRootParams = {
  PhoneNumber: undefined;
  SecurityCode: {phoneNumber: string; code: string};
};

const Verification: FC<Props> = ({
  colors,
  translucent,
  sendVerifCode,
  onSubmit,
  codeError,
}) => {
  const translucentHook = useTranslucent(translucent);

  return (
    <TransluscentContext.Provider value={translucentHook}>
      <ColorsContext.Provider value={colors}>
        <Stack.Navigator
          initialRouteName="PhoneNumber"
          screenOptions={{
            header: () => null,
            contentStyle: {backgroundColor: colors.background},
          }}>
          <Stack.Screen name="PhoneNumber">
            {props => <PhoneNumber {...props} sendVerifCode={sendVerifCode} />}
          </Stack.Screen>
          <Stack.Screen name="SecurityCode">
            {props => (
              <SecurityCode
                {...props}
                sendVerifCode={sendVerifCode}
                onSubmit={onSubmit}
                codeError={codeError}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </ColorsContext.Provider>
    </TransluscentContext.Provider>
  );
};

export default Verification;
