import {useTranslation} from "react-i18next";
import {View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";

import {
  AddEditCard,
  Delivery,
  OrderInfo,
  PayLoading,
  Payment
} from "./components";
import {useData, usePay, usePayMethods, useStyle} from "./hooks";

const Checkout = () => {
  const {styles} = useStyle();
  const dataProps = useData();
  const {submitPay, showPayLoading, loading} = usePay();
  const payMethodsProps = usePayMethods();

  const {t} = useTranslation();

  return (
    <>
      <View style={styles.mainWrapper}>
        <SimpleHeader title={t("checkout.header")} />
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Delivery {...dataProps} />
          <Payment {...payMethodsProps} />
          <OrderInfo />
        </ScrollView>
        <Button
          onPress={submitPay}
          text={t("checkout.pay")}
          style={styles.payButton}
        />
      </View>
      <AddEditCard
        ref={payMethodsProps.addEditCardSheetRef}
        {...payMethodsProps}
      />
      {showPayLoading && <PayLoading loading={loading} />}
    </>
  );
};

export default Checkout;
