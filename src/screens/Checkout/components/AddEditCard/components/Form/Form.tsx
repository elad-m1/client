import {FormikProps} from "formik";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {FormInput} from "@/components";

import {useStyle} from "./hooks";

interface Props {
  shownCardData: {
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
> = ({shownCardData, values, handleChange}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <FormInput
        value={shownCardData ? shownCardData.ccName : values.ccName}
        editable={shownCardData === null}
        onChangeText={handleChange("ccName")}
        placeholder={t("checkout.cc_name")}
        label={t("checkout.cc_name")}
        bottomSheet
        required
      />
      <View style={styles.ccNumberWrapper}>
        <FormInput
          value={shownCardData ? shownCardData.ccNumber : values.ccNumber}
          editable={shownCardData === null}
          onChangeText={handleChange("ccNumber")}
          placeholder="**** **** **** 1234"
          label={t("checkout.cc_number")}
          style={{flex: 3}}
          bottomSheet
          required
        />
        <FormInput
          value={shownCardData ? shownCardData.cvv : values.cvv}
          editable={shownCardData === null}
          onChangeText={handleChange("cvv")}
          placeholder="123"
          label={t("checkout.cvv")}
          style={{flex: 1}}
          bottomSheet
          required
        />
      </View>
      <FormInput
        value={shownCardData ? shownCardData.expDate : values.expDate}
        editable={shownCardData === null}
        onChangeText={handleChange("expDate")}
        placeholder="01/27"
        label={t("checkout.exp_date")}
        bottomSheet
        required
      />
    </View>
  );
};

export default Form;
