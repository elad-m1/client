import {useTranslation} from "react-i18next";
import {View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";

import {Delivery, OrderInfo, Payment} from "./components";
import {useData, useStyle} from "./hooks";

const Checkout = () => {
  const {styles} = useStyle();
  const dataProps = useData();

  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title={t("checkout.header")} />
      <ScrollView contentContainerStyle={{flex: 1}}>
        <Delivery {...dataProps} />
        <Payment />
        <OrderInfo />
      </ScrollView>
      <Button
        onPress={() => {}}
        text={t("checkout.pay")}
        style={styles.payButton}
      />
    </View>
  );
};

export default Checkout;
