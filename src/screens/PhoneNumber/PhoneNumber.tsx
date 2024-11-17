import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {I18nManager, Pressable, View} from "react-native";

import {Button, SimpleHeader, Text} from "@/components/index";
import listOfCountries from "@/misc/list_of_countries.json";
import {scale} from "@/utils/sizing";

import CountryAndPhone from "./components/CountryAndPhone/CountryAndPhone";
import useForm from "./hooks/useForm";
import useStyle from "./hooks/useStyle";

const PhoneNumber: FC = () => {
  const {styles, colors} = useStyle();
  const {
    phoneNumber,
    onPhoneNumberChange,
    selectedCountryName,
    onCountrySelect,
    goToSecurityCode
  } = useForm();

  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <SimpleHeader title={t("phone_number.header")} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>phone_number.title</Text>
        <Text style={styles.subTitle}>phone_number.subtitle</Text>
      </View>
      <View style={{width: "100%", alignItems: "center"}}>
        <CountryAndPhone
          countryData={listOfCountries.countries}
          onCountrySelect={onCountrySelect}
          selectedCountryName={selectedCountryName}
          onPhoneNumberChange={onPhoneNumberChange}
          phoneNumber={phoneNumber}
        />
        <Button
          onPress={() => goToSecurityCode(phoneNumber)}
          text={t("general.next")}
          icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
        />
      </View>
    </View>
  );
};

export default PhoneNumber;
