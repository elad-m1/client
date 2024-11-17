import {FormikProps} from "formik";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Text, View} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import {FormInput} from "@/components";
import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

const RequiredFields: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    gender: string;
    hairColor: string;
    hairType: string;
  }>
> = ({values, handleChange}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();
  return (
    <View style={{gap: scale(12)}}>
      <FormInput
        value={values.firstName}
        onChangeText={handleChange("firstName")}
        placeholder={t("register.first_name")}
        label={t("register.first_name")}
        required
      />
      <FormInput
        value={values.lastName}
        onChangeText={handleChange("lastName")}
        placeholder={t("register.last_name")}
        label={t("register.last_name")}
        required
      />
      <SelectDropdown
        data={["male", "female"]}
        onSelect={value => handleChange("gender")(value)}
        renderButton={() => (
          <View>
            <FormInput
              value={t(`register.${values.gender}`)}
              onChangeText={handleChange("gender")}
              editable={false}
              scrollEnabled={false}
              placeholder={t(`register.${values.gender}`)}
              label={t("register.gender")}
              endIcon="chevron-down"
              required
            />
          </View>
        )}
        renderItem={item => (
          <View style={styles.dropdownItemWrapper}>
            <Text style={styles.dropdownItemText}>{t(`register.${item}`)}</Text>
          </View>
        )}
        dropdownStyle={styles.dropdownWrapper}
      />
    </View>
  );
};

export default RequiredFields;
