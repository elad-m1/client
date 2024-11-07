import {FC, memo} from 'react';
import {Pressable, Text} from 'react-native';

import useMisc from './hooks/useMisc';

const Button: FC = memo(() => {
  const {styles, colors} = useMisc();
  return (
    <Pressable>
      <Text>HELLO</Text>
    </Pressable>
  );
});

export default Button;
