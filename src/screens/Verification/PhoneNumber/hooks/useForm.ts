import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {VerificationStackRootParams} from '../../Verification';
import {Country} from '../../utils/types';
import listOfCountries from '../../utils/list_of_countries.json';

const useForm = () => {
  const [country, setCountry] = useState<Country>(listOfCountries.countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPhoneNumberChange = (value: string) =>
    setPhoneNumber(value.replace(/[^0-9]/g, ''));

  const onCountrySelect = (newCountry: Country) => setCountry(newCountry);

  const navigation =
    useNavigation<NativeStackNavigationProp<VerificationStackRootParams>>();

  const goToSecurityCode = (phoneNumber: string) => {
    if (phoneNumber.length !== 10) {
      ToastAndroid.show('Phone Number Invalid', ToastAndroid.SHORT);
      return;
    }
    navigation.navigate('SecurityCode', {
      phoneNumber: phoneNumber,
      code: country.phone[0],
    });
  };

  return {
    phoneNumber,
    onPhoneNumberChange,
    country,
    onCountrySelect,
    goToSecurityCode,
  };
};

export default useForm;
