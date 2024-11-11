import {FC} from 'react';
import {I18nManager, View} from 'react-native';
import {Formik} from 'formik';
import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';

import {Button, Header} from '@/components';
import useMisc from './hooks/useMisc';
import {ImageBackground, Inputs} from './components';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required(''),
  lastName: Yup.string().required(''),
});

interface Props {
  goNext: () => void;
}

const FullName: FC<Props> = ({goNext}) => {
  const {styles} = useMisc();
  const {t} = useTranslation();
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={() => {}}>
      {formikProps => (
        <View style={styles.mainWrapper}>
          <Header title="" style={styles.header} />
          <ImageBackground />
          <Inputs {...formikProps} />
          <Button
            onPress={goNext}
            text={t('general.next')}
            icon={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'}
            style={{width: '80%', alignSelf: 'center'}}
          />
        </View>
      )}
    </Formik>
  );
};

export default FullName;
