import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";
import {
  FlatList,
  RefreshControl,
  ScrollView
} from "react-native-gesture-handler";

import {Button, Text} from "@/components";
import {scale} from "@/utils/sizing";
import {CreditCard} from "@/utils/types";

import {PayMethod} from "./components";
import {useStyle} from "./hooks";

interface Props {
  openAddEditCardSheet: (id?: string) => void;
  paymentMethods: CreditCard[];
}

/**
 * Payment component that displays a list of payment methods and a button to add or edit them.
 *
 * @param {Object} props - Component props
 * @param {Function} props.openAddEditCardSheet - Function to open the add/edit card sheet
 * @param {CreditCard[]} props.paymentMethods - Array of payment methods to display
 *
 * @returns {JSX.Element} A view containing the payment methods list and an add/edit button
 */
const Payment: FC<Props> = ({openAddEditCardSheet, paymentMethods}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>checkout.payment</Text>
      <ScrollView
        style={{maxHeight: scale(200)}}
        showsVerticalScrollIndicator={false}>
        {paymentMethods.length ? (
          paymentMethods.map((item, index) => (
            <PayMethod
              key={index}
              {...item}
              methodType="VISA Classic"
              onPress={() => openAddEditCardSheet(item.id)}
            />
          ))
        ) : (
          <Text style={styles.emptyListLabel}>checkout.no_payment_methods</Text>
        )}
      </ScrollView>
      <Button
        onPress={() => openAddEditCardSheet()}
        text={t("checkout.add_payment_method")}
      />
    </View>
  );
};

export default Payment;
