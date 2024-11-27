import {useTranslation} from "react-i18next";
import {Platform, View} from "react-native";
import {RefreshControl, ScrollView} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";

import {
  AddEditCard,
  Delivery,
  OrderInfo,
  Payment,
  SuccessSheet
} from "./components";
import {useData, usePayMethods, useSheet, useStyle} from "./hooks";

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
  const {isSuccessSheetOpen, openSuccessSheet, closeSuccessSheet} = useSheet();
  const payMethodsProps = usePayMethods();

  const {t} = useTranslation();

  return (
    <>
      <View style={styles.mainWrapper}>
        <SimpleHeader title={t("checkout.header")} />
        <ScrollView contentContainerStyle={{flex: 1}} nestedScrollEnabled>
          <Delivery {...dataProps} />
          <Payment {...payMethodsProps} />
          <OrderInfo />
        </ScrollView>
        <Button
          onPress={openSuccessSheet}
          text={t("checkout.pay")}
          style={styles.payButton}
        />
      </View>
      <AddEditCard
        ref={payMethodsProps.addEditCardSheetRef}
        {...payMethodsProps}
      />
      {isSuccessSheetOpen && (
        <SuccessSheet closeSuccessSheet={closeSuccessSheet} />
      )}
    </>
  );
};

export default Checkout;
