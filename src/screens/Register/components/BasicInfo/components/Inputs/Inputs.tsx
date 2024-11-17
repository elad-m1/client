import {FormikProps} from "formik";
import moment from "moment";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {
  I18nManager,
  KeyboardAvoidingView,
  ScrollView,
  Text
} from "react-native";
import DatePicker from "react-native-date-picker";

import {FormInput} from "@/components";

import useStyle from "./hooks/useStyle";

const Inputs: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: string;
    hairColor: string;
  }>
> = ({values, handleChange, errors}) => {
  const {styles, isDateOpen, toggleIsDateOpen} = useStyle();
  const {t} = useTranslation();
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainWrapper}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        automaticallyAdjustKeyboardInsets={false}>
        <FormInput
          value={values.firstName}
          onChangeText={handleChange("firstName")}
          placeholder={t("register.basic_info.first_name")}
          label={t("register.basic_info.first_name")}
          required
        />
        <FormInput
          value={values.lastName}
          onChangeText={handleChange("lastName")}
          placeholder={t("register.basic_info.last_name")}
          label={t("register.basic_info.last_name")}
          required
        />
        <FormInput
          value={values.gender}
          onChangeText={handleChange("gender")}
          placeholder={t("register.basic_info.gender")}
          label={t("register.basic_info.gender")}
          required
        />
        <FormInput
          value={moment(values.dateOfBirth).format(
            I18nManager.isRTL ? "DD MMM YYYY" : "Do MMM YYYY"
          )}
          placeholder={t("register.basic_info.date_of_birth")}
          label={t("register.basic_info.date_of_birth")}
          onPress={toggleIsDateOpen}
          required
        />
        <DatePicker
          modal
          open={isDateOpen}
          mode="date"
          date={new Date(values.dateOfBirth)}
          onConfirm={date => {
            handleChange("dateOfBirth")(date.toDateString());
            toggleIsDateOpen();
          }}
          onCancel={toggleIsDateOpen}
        />
        <Text style={styles.error}>{Object.values(errors)[0]}</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Inputs;
