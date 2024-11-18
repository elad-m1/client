import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {Button, Text} from "@/components";

import {PayMethod} from "./components";
import {useData, useStyle} from "./hooks";

const Payment = () => {
  const {styles} = useStyle();
  const {paymentMethods} = useData();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>checkout.payment</Text>
      <View>
        {paymentMethods.map((item, index) => (
          <PayMethod {...item} key={index} />
        ))}
      </View>
      <Button onPress={() => {}} text={t("checkout.add_payment_method")} />
    </View>
  );
};

export default Payment;
