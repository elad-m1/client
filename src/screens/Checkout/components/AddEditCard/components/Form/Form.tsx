import {FormikProps} from "formik";
import moment from "moment";
import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {I18nManager, View} from "react-native";

import {FormInput} from "@/components";

import {useStyle} from "./hooks";

interface Props {
  cardData: {
    ccName: string;
    ccNumber: string;
    cvv: string;
    expDate: string;
  } | null;
}

const Form: FC<
  Props &
    FormikProps<{
      ccName: string;
      ccNumber: string;
      cvv: string;
      expDate: string;
    }>
> = ({cardData, values, handleChange}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <FormInput
        value={cardData ? cardData.ccName : values.ccName}
        editable={!cardData}
        onChangeText={handleChange("ccName")}
        placeholder={t("checkout.cc_name")}
        label={t("checkout.cc_name")}
        required
      />
      <View style={styles.ccNumberWrapper}>
        <FormInput
          value={cardData ? cardData.ccNumber : values.ccNumber}
          editable={!cardData}
          onChangeText={handleChange("ccNumber")}
          placeholder="**** **** **** 1234"
          label={t("checkout.cc_number")}
          style={{flex: 3}}
          required
        />
        <FormInput
          value={cardData ? cardData.cvv : values.cvv}
          editable={!cardData}
          onChangeText={handleChange("cvv")}
          placeholder="123"
          label={t("checkout.cvv")}
          style={{flex: 1}}
          required
        />
      </View>
      <FormInput
        value={cardData ? cardData.expDate : values.expDate}
        editable={!cardData}
        onChangeText={handleChange("expDate")}
        placeholder="01/27"
        label={t("checkout.exp_date")}
        required
      />
    </View>
  );
};

export default Form;
