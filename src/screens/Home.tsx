import {FC} from 'react';
import {SafeAreaView, Text} from 'react-native';

const Home: FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
};

export default Home;
