import {FC} from 'react';
import {KeyboardAvoidingView, ScrollView, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FormikProps} from 'formik';

import {FormInput} from '@/components';
import useMisc from './hooks/useMisc';
import DatePicker from 'react-native-date-picker';

const Inputs: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    hairColor: string;
  }>
> = ({values, handleChange, errors}) => {
  const {styles, isDateOpen, toggleIsDateOpen} = useMisc();
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.scrollView}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        automaticallyAdjustKeyboardInsets={false}>
        <FormInput
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          placeholder={t('register.basic_info.first_name')}
          label={t('register.basic_info.first_name')}
          required
        />
        <FormInput
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          placeholder={t('register.basic_info.last_name')}
          label={t('register.basic_info.last_name')}
          required
        />
        <FormInput
          value={values.gender}
          onChangeText={handleChange('gender')}
          placeholder={t('register.basic_info.gender')}
          label={t('register.basic_info.gender')}
          required
        />
        <FormInput
          value={values.dateOfBirth}
          placeholder={t('register.basic_info.date_of_birth')}
          label={t('register.basic_info.date_of_birth')}
          onPress={toggleIsDateOpen}
          required
        />
        <DatePicker
          modal
          open={isDateOpen}
          mode="date"
          date={new Date(values.dateOfBirth)}
          onConfirm={date => {
            handleChange('dateOfBirth')(date.toDateString());
            toggleIsDateOpen();
          }}
          onCancel={toggleIsDateOpen}
        />
        <Text style={styles.error}>{Object.values(errors)[0]}</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Inputs;
