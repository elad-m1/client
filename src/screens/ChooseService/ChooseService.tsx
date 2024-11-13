import {FC} from "react";
import {useTranslation} from "react-i18next";
import {
  FlatList,
  I18nManager,
  Pressable,
  Text as RNText,
  View
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import {Button, Header, Text} from "@/components";
import en from "@/locales/langs/en.json";
import he from "@/locales/langs/he.json";
import {scale} from "@/utils/sizing";

import useData from "./hooks/useData";
import useMisc from "./hooks/useMisc";
import useNav from "./hooks/useNav";

/**
 * Screen to make an appointment.
 *
 * Contains a select dropdown for selecting the barber and a FlatList for selecting the services.
 * The user can select multiple services by pressing on them.
 * The selected services are highlighted in the primary color.
 * The user can only proceed to the next step if a barber and at least one service are selected.
 *
 * @returns JSX.Element
 */
const ChooseService: FC = () => {
  const {styles, colors} = useMisc();
  const {
    selectedBarber,
    selectedServices,
    handleBarberSelect,
    handleServiceSelect
  } = useData();
  const {goToChooseDate} = useNav(selectedBarber, selectedServices);
  const {t} = useTranslation();
  const lang = I18nManager.isRTL ? he : en;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background
      }}>
      <Header title={t("make_appointment.header")} />
      <FlatList
        data={Object.values(lang.make_appointment.services)}
        renderItem={({item}) => (
          <Pressable
            style={({pressed}) => [
              styles.service,
              {
                opacity: pressed ? 0.5 : 1,
                borderColor: selectedServices.some(service => service === item)
                  ? colors.primary
                  : colors.border
              }
            ]}
            onPress={() => handleServiceSelect(item)}>
            <RNText style={{textAlign: "left", color: colors.text}}>
              {item}
            </RNText>
          </Pressable>
        )}
        ListHeaderComponent={() => (
          <>
            <SelectDropdown
              data={["תומר", "איתי", "יוסף", "אבי", "שמעון"]}
              onSelect={handleBarberSelect}
              statusBarTranslucent
              renderButton={() => (
                <View style={styles.chooseBarber}>
                  <RNText style={{textAlign: "left", color: colors.text}}>
                    {selectedBarber ?? t("make_appointment.choose_barber")}
                  </RNText>
                </View>
              )}
              renderItem={item => (
                <View style={styles.dropdownItemWrapper}>
                  <RNText style={styles.dropdownItemText}>{item}</RNText>
                </View>
              )}
              dropdownStyle={styles.dropdownWrapper}
            />
            <Text style={{marginTop: scale(32), color: colors.text}}>
              make_appointment.choose_service
            </Text>
          </>
        )}
        ListFooterComponent={() => (
          <Button
            text={t("general.next")}
            disabled={!selectedBarber || !selectedServices.length}
            onPress={goToChooseDate}
          />
        )}
        contentContainerStyle={{
          marginTop: scale(32),
          paddingHorizontal: scale(42),
          gap: scale(12)
        }}
      />
    </View>
  );
};

export default ChooseService;
