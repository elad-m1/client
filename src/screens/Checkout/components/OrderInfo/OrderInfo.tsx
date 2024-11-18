import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Text as RNText, View} from "react-native";

import {Text} from "@/components";
import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {}

const OrderInfo: FC<Props> = ({}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>checkout.order_info</Text>
      <View style={styles.sectionsWrapper}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionName}>checkout.sub_total</Text>
          <RNText style={styles.sectionPrice}>81.90 ₪</RNText>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.sectionName}>checkout.sale</Text>
          <RNText style={styles.sectionPrice}>-20 ₪</RNText>
        </View>
        <View style={[styles.sectionWrapper, {marginTop: scale(12)}]}>
          <Text style={styles.sectionName}>checkout.total</Text>
          <RNText style={styles.total}>61.90 ₪</RNText>
        </View>
      </View>
    </View>
  );
};

export default OrderInfo;
