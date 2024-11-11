import {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {PhoneNumber, SecurityCode, Welcome} from '@/screens';
import Register from '@/screens/Register/Register';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Welcome: undefined;
  PhoneNumber: undefined;
  SecurityCode: {phoneNumber: string; code: string};
  Register: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const AuthNavigator: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="SecurityCode" component={SecurityCode} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
