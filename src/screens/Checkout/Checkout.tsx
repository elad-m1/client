import {useTranslation} from "react-i18next";
import {Platform, View} from "react-native";
import {RefreshControl, ScrollView} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";

import {
  AddEditCard,
  Delivery,
  OrderInfo,
  PayLoading,
  Payment
} from "./components";
import {useData, usePay, usePayMethods, useStyle} from "./hooks";

/**
 * Checkout screen, containing the checkout form, payment methods, order info, and
 * pay button. Also handles adding and editing payment methods, and displays a
 * loading screen during payment.
 *
 * @returns JSX.Element
 */
const Checkout = () => {
  const {styles, colors} = useStyle();
  const dataProps = useData();
  const {submitPay, showPayLoading, loading} = usePay();
  const payMethodsProps = usePayMethods();

  const {t} = useTranslation();

  return (
    <>
      <View style={styles.mainWrapper}>
        <SimpleHeader title={t("checkout.header")} />
        <ScrollView
          contentContainerStyle={{flex: 1}}
          refreshControl={
            <RefreshControl
              refreshing={payMethodsProps.loadingMethods}
              onRefresh={payMethodsProps.loadPaymentMethods}
              colors={[colors.primary]}
              progressBackgroundColor={
                Platform.OS === "ios" ? colors.background : colors.card
              }
            />
          }
          nestedScrollEnabled>
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
