import {FC} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FormikProps} from 'formik';
import Animated from 'react-native-reanimated';

import {Button, Header, Text} from '@/components';
import {useAnim, useMisc} from './hooks';
import {HairList} from './components';

interface Props {
  goPrevious: () => void;
  goNext: () => void;
}

const HairColor: FC<
  Props &
    FormikProps<{
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: string;
      hairColor: string;
    }>
> = ({goPrevious, goNext, ...formikProps}) => {
  const {styles} = useMisc();
  const {yValue} = useAnim(formikProps.values.hairColor);
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <Header title="" backOnPress={goPrevious} />
      <Text style={styles.question}>register.hair_color.title</Text>
      <HairList {...formikProps} />
      <Animated.View
        style={[styles.nextButton, {transform: [{translateY: yValue}]}]}>
        <Button text={t('general.next')} onPress={goNext} />
      </Animated.View>
    </View>
  );
};

export default HairColor;
