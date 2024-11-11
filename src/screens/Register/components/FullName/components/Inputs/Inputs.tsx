import {FC} from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FormikProps} from 'formik';

import {FormInput} from '@/components';
import useMisc from './hooks/useMisc';

const Inputs: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    hairColor: string;
  }>
> = ({values, handleChange}) => {
  const {styles} = useMisc();
  const {t} = useTranslation();
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}>
      <FormInput
        value={values.firstName}
        onChangeText={handleChange('firstName')}
        placeholder={t('register.full_name.first_name')}
        label={t('register.full_name.first_name')}
        required
      />
      <FormInput
        value={values.lastName}
        onChangeText={handleChange('lastName')}
        placeholder={t('register.full_name.last_name')}
        label={t('register.full_name.last_name')}
        required
      />
    </ScrollView>
  );
};

export default Inputs;
