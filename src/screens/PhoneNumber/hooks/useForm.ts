import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthStackParamList} from '@/navigation/AuthNavigator';
import listOfCountries from '@/misc/list_of_countries.json';

const useForm = () => {
  const [selectedCountryName, setSelectedCountryName] = useState<string | null>(
    null,
  );
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPhoneNumberChange = (value: string) =>
    setPhoneNumber(value.replace(/[^0-9]/g, ''));

  const onCountrySelect = (newCountryName: string | null) =>
    setSelectedCountryName(newCountryName);

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const goToSecurityCode = (phoneNumber: string) => {
    const selectedCountry = listOfCountries.countries.find(
      country => country.name === selectedCountryName,
    );
    if (!selectedCountry) return;
    if (phoneNumber.length !== 10) {
      return;
    }
    navigation.navigate('SecurityCode', {
      phoneNumber: phoneNumber,
      code: selectedCountry.phone[0],
    });
  };

  return {
    phoneNumber,
    onPhoneNumberChange,
    selectedCountryName,
    onCountrySelect,
    goToSecurityCode,
  };
};

export default useForm;
