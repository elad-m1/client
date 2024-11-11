import {FC} from 'react';
import {I18nManager, View} from 'react-native';
import {FormikProps} from 'formik';
import {useTranslation} from 'react-i18next';

import {Button, Header} from '@/components';
import useMisc from './hooks/useMisc';
import {ImageBackground, Inputs} from './components';

interface Props {
  goNext: () => void;
}

const FullName: FC<
  Props &
    FormikProps<{
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: string;
      hairColor: string;
    }>
> = ({goNext, ...formikProps}) => {
  const {styles} = useMisc();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <Header title="" translucent />
      <ImageBackground />
      <Inputs {...formikProps} />
      <Button
        onPress={goNext}
        text={t('general.next')}
        icon={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'}
        style={{width: '80%', alignSelf: 'center'}}
      />
    </View>
  );
};

export default FullName;
