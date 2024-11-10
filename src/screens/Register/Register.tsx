import {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {FormInput, Header} from '@/components';
import {scale} from '@/utils/sizing';
import useMisc from './hooks/useMisc';

const RegisterSchema = Yup.object({
  firstName: Yup.string().required(''),
  lastName: Yup.string().required(''),
  gender: Yup.number().required(''),
  hairColor: Yup.string(),
  hairType: Yup.string(),
});

const Register: FC = () => {
  const {styles} = useMisc();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <Header title="" />
      <Formik
        initialValues={{
          firstName: 'asdfs',
          lastName: '',
          gender: 0, // 0 Men, 1 Women,
          hairColor: '',
          hairType: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={() => {}}>
        {({values, handleChange, handleSubmit, isSubmitting}) => (
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: scale(24),
            }}>
            <FormInput
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              placeholder={t('register.first_name')}
              label={t('register.first_name')}
              style={{width: '100%'}}
              required
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default Register;
