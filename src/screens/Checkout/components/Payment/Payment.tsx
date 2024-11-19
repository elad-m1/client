import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {Button, Text} from "@/components";

import {PayMethod} from "./components";
import {useData, useStyle} from "./hooks";

interface Props {
  openAddEditCardSheet: (id?: string) => void;
}

const Payment: FC<Props> = ({openAddEditCardSheet}) => {
  const {styles} = useStyle();
  const {paymentMethods} = useData();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>checkout.payment</Text>
      <View>
        {paymentMethods.map((item, index) => {
          return item ? (
            <PayMethod
              key={index}
              {...item}
              methodType="VISA Classic"
              onPress={() => openAddEditCardSheet(item.id)}
            />
          ) : null;
        })}
      </View>
      <Button
        onPress={() => openAddEditCardSheet()}
        text={t("checkout.add_payment_method")}
      />
    </View>
  );
};

export default Payment;
