import {FC} from 'react';
import {I18nManager, Pressable, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {scale} from '@/utils/sizing';
import listOfCountries from '@/misc/list_of_countries.json';
import {Header, Text} from '@/components/index';
import CountryAndPhone from './components/CountryAndPhone/CountryAndPhone';
import useMisc from './hooks/useMisc';
import useForm from './hooks/useForm';
import {useTranslation} from 'react-i18next';

const PhoneNumber: FC = () => {
  const {styles, colors} = useMisc();
  const {
    phoneNumber,
    onPhoneNumberChange,
    selectedCountryName,
    onCountrySelect,
    goToSecurityCode,
  } = useForm();

  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <Header title={t('phone_number.header')} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>phone_number.title</Text>
        <Text style={styles.subTitle}>phone_number.subtitle</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <CountryAndPhone
          countryData={listOfCountries.countries}
          onCountrySelect={onCountrySelect}
          selectedCountryName={selectedCountryName}
          onPhoneNumberChange={onPhoneNumberChange}
          phoneNumber={phoneNumber}
        />
        {/* <Button /> */}
        <Pressable
          style={({pressed}) => [
            styles.nextButton,
            {opacity: pressed ? 0.5 : 1},
          ]}
          onPress={() => {
            // sendVerifCode(phoneNumber);
            goToSecurityCode(phoneNumber);
          }}>
          <Text style={styles.nextButtonText}>general.next</Text>
          <FontAwesomeIcon
            icon={I18nManager.isRTL ? 'chevron-left' : 'chevron-right'}
            color={colors.primary}
            size={scale(14)}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PhoneNumber;
