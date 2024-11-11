import {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {FullName} from './components';
import {useMisc, useNav} from './hooks';

const Register: FC = () => {
  const {styles} = useMisc();
  const {scrollViewRef, goNext, goPrevious} = useNav();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <ScrollView
        ref={scrollViewRef}
        style={{flex: 1}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal>
        <FullName goNext={goNext} />
        <FullName goNext={goNext} />
        <FullName goNext={goNext} />
      </ScrollView>
    </View>
  );
};

export default Register;
