import {FC} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FormikProps} from 'formik';
import {useTranslation} from 'react-i18next';

import {RegisterCard} from '@/components';
import {scale} from '@/utils/sizing';
import {Hair} from '@/assets/svgs';
import useMisc from './hooks/useMisc';

interface Props {}

const HairList: FC<
  Props &
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
      contentContainerStyle={styles.columnsWrapper}
      showsVerticalScrollIndicator={false}
      style={{
        marginTop: scale(48),
      }}>
      <View style={styles.column}>
        {['black', 'brown', 'blonde'].map((color, index) => (
          <RegisterCard
            onPress={() =>
              handleChange('hairColor')(values.hairColor === color ? '' : color)
            }
            icon={<Hair color={color} />}
            active={values.hairColor === color}
            text={t(`register.hair_color.colors.${color}`)}
            key={index}
          />
        ))}
      </View>
      <View style={styles.column}>
        {['ginger', 'gray', 'red', 'colorful'].map((color, index) => (
          <RegisterCard
            onPress={() =>
              handleChange('hairColor')(values.hairColor === color ? '' : color)
            }
            icon={<Hair color={color} />}
            active={values.hairColor === color}
            text={t(`register.hair_color.colors.${color}`)}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HairList;