import {FormikProps} from "formik";
import moment from "moment";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {I18nManager, View} from "react-native";
import DatePicker from "react-native-date-picker";

import {FormInput} from "@/components";

import {useDate, useStyle} from "./hooks";

const Inputs: FC<
  FormikProps<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  }>
> = ({values, handleChange}) => {
  const {styles} = useStyle();
  const {isDateOpen, toggleIsDateOpen} = useDate();

  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <FormInput
        value={values.firstName}
        onChangeText={handleChange("firstName")}
        placeholder={t("edit_profile.first_name")}
        label={t("edit_profile.first_name")}
      />
      <FormInput
        value={values.lastName}
        onChangeText={handleChange("lastName")}
        placeholder={t("edit_profile.last_name")}
        label={t("edit_profile.last_name")}
      />

      <FormInput
        value={moment(values.dateOfBirth).format(
          I18nManager.isRTL ? "DD MMM YYYY" : "Do MMM YYYY"
        )}
        placeholder={t("edit_profile.date_of_birth")}
        label={t("edit_profile.date_of_birth")}
        onPress={toggleIsDateOpen}
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
    </View>
  );
};

export default Inputs;
