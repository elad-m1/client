import {FC, useContext} from 'react';
import {I18nManager, Pressable, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/sizing';
import Header from '../components/Header/Header';
import useMisc from './hooks/useMisc';
import useForm from './hooks/useForm';
import ColorsContext from '../context/colors';
import {Country} from '../utils/types';

import listOfCountries from '../utils/list_of_countries.json';

const countryData: Country[] = listOfCountries.countries;

interface Props {
  sendVerifCode: (phoneNumber: string) => void;
}

const PhoneNumber: FC<Props> = ({sendVerifCode}) => {
  const {styles} = useMisc();
  const {
    phoneNumber,
    onPhoneNumberChange,
    country,
    onCountrySelect,
    goToSecurityCode,
  } = useForm();
  const colors = useContext(ColorsContext);
  return (
    <View style={{flex: 1}}>
      <Header title="Phone Number" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.subTitle}>We'll send you a verification code</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View
          style={[
            styles.phoneNumberWrapper,
            {marginBottom: SCREEN_HEIGHT * 0.15},
          ]}>
          <Picker
            selectionColor={colors.text}
            dropdownIconColor={colors.text}
            selectedValue={country}
            onValueChange={value => onCountrySelect(value)}
            style={{width: SCREEN_WIDTH * 0.8}}
            itemStyle={{backgroundColor: colors.card}}>
            {countryData.map(country => (
              <Picker.Item
                label={`${country.emoji}  ${country.phone[0]}  ${country.name}`}
                color={colors.text}
                key={country.name}
                style={{backgroundColor: colors.card}}
                value={country}
              />
            ))}
          </Picker>
          <TextInput
            value={phoneNumber}
            onChangeText={onPhoneNumberChange}
            style={styles.phoneNumberInput}
            keyboardType="numeric"
            placeholder="Your phone number"
            placeholderTextColor={colors.placeholder}
            numberOfLines={1}
            returnKeyType="done"
          />
        </View>
        <Pressable
          style={({pressed}) => [
            styles.nextButton,
            {opacity: pressed ? 0.5 : 1},
          ]}
          onPress={() => {
            sendVerifCode(phoneNumber);
            goToSecurityCode(phoneNumber);
          }}>
          <Text style={styles.nextButtonText}>Next</Text>
          <FontAwesomeIcon
            icon={I18nManager.isRTL ? faChevronLeft : faChevronRight}
            color={colors.onPrimary}
            size={scale(14)}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default PhoneNumber;
