import {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Login: FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;
