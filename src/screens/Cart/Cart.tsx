import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Text as RNText, View} from "react-native";

import {SimpleHeader} from "@/components";

import {useStyle} from "./hooks";

const Cart: FC = () => {
  const {styles} = useStyle();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title={t("cart.header")} />
    </View>
  );
};

export default Cart;
