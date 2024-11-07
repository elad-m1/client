import {FC, memo, useContext} from 'react';
import {I18nManager, Pressable, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '@utils/sizing';
import {Country} from '@utils/types';
import listOfCountries from '@misc/list_of_countries.json';
import {Header, Button} from '@components/index';
import CountryAndPhone from './components/CountryAndPhone/CountryAndPhone';
import useMisc from './hooks/useMisc';
import useForm from './hooks/useForm';

interface Props {
  sendVerifCode: (phoneNumber: string) => void;
}

const PhoneNumber: FC<Props> = memo(({sendVerifCode}) => {
  const {styles, colors} = useMisc();
  const {
    phoneNumber,
    onPhoneNumberChange,
    selectedCountryName,
    onCountrySelect,
    goToSecurityCode,
  } = useForm();
  return (
    <View style={{flex: 1}}>
      <Header title="Phone Number" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.subTitle}>We'll send you a verification code</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <CountryAndPhone
          countryData={listOfCountries.countries}
          onCountrySelect={onCountrySelect}
          selectedCountryName={selectedCountryName}
          onPhoneNumberChange={onPhoneNumberChange}
          phoneNumber={phoneNumber}
        />
        <Button />
        {/* <Pressable
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
        </Pressable> */}
      </View>
    </View>
  );
});

export default PhoneNumber;
