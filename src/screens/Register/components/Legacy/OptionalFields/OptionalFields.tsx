import {FC} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {FormikProps} from 'formik';

import {FormInput} from '@/components';
import {scale} from '@/utils/sizing';

const OptionalFields: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    gender: string;
    hairColor: string;
    hairType: string;
  }>
> = ({values, handleChange}) => {
  const {t} = useTranslation();

  return (
    <View style={{gap: scale(12)}}>
      <FormInput
        value={values.hairColor}
        onChangeText={handleChange('hairColor')}
        placeholder={t('register.hair_color')}
        label={t('register.hair_color')}
      />
      <FormInput
        value={values.hairType}
        onChangeText={handleChange('hairType')}
        placeholder={t('register.hair_type')}
        label={t('register.hair_type')}
      />
    </View>
  );
};

export default OptionalFields;
