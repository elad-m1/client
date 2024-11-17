import {Picker} from "@react-native-picker/picker";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {TextInput, View} from "react-native";

import {SCREEN_HEIGHT, SCREEN_WIDTH} from "@/utils/sizing";
import {Country} from "@/utils/types";

import useStyle from "./hooks/useStyle";

interface Props {
  countryData: Array<Country>;
  selectedCountryName: string | null;
  onCountrySelect: (value: string | null) => void;
  phoneNumber: string;
  onPhoneNumberChange: (value: string) => void;
}

const CountryAndPhone: FC<Props> = ({
  countryData,
  selectedCountryName,
  onCountrySelect,
  phoneNumber,
  onPhoneNumberChange
}) => {
  const {styles, colors} = useStyle();
  const {t} = useTranslation();
  return (
    <View
      style={[styles.phoneNumberWrapper, {marginBottom: SCREEN_HEIGHT * 0.15}]}>
      <Picker
        selectionColor={colors.text}
        dropdownIconColor={colors.text}
        selectedValue={selectedCountryName}
        onValueChange={onCountrySelect}
        style={{width: SCREEN_WIDTH * 0.8}}
        itemStyle={{backgroundColor: colors.background}}>
        {countryData.map(country => (
          <Picker.Item
            label={`${country.emoji}  ${country.phone[0]}  ${country.name}`}
            color={colors.text}
            key={country.name}
            style={{backgroundColor: colors.background}}
            value={country.name}
          />
        ))}
      </Picker>
      <TextInput
        value={phoneNumber}
        onChangeText={onPhoneNumberChange}
        style={styles.phoneNumberInput}
        keyboardType="numeric"
        placeholder={t("phone_number.input_placeholder")}
        placeholderTextColor={colors.placeholder}
        numberOfLines={1}
        returnKeyType="done"
      />
    </View>
  );
};

export default CountryAndPhone;
