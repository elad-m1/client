import {FC} from 'react';
import {Image, View} from 'react-native';

import {Text} from '@/components';
import useMisc from './hooks/useMisc';

const ImageBackground: FC = () => {
  const {styles} = useMisc();
  return (
    <View style={styles.imageWrapper}>
      <Image
        source={{
          uri: 'https://nationaltoday.com/wp-content/uploads/2022/02/Barbers-Day-1200x834.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.imageForeground}></View>
      <Text style={styles.imageTitle}>register.full_name.title</Text>
    </View>
  );
};

export default ImageBackground;
