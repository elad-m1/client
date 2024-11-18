import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {CardOption, Text} from "@/components";

import {useStyle} from "./hooks";

interface Props {
  deliveryMethod: "pickup" | "car";
  chooseMethod: (method: "pickup" | "car") => void;
}

const Delivery: FC<Props> = ({deliveryMethod, chooseMethod}) => {
  const {styles} = useStyle();
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>checkout.delivery_method</Text>
      <View style={styles.methodsWrapper}>
        <CardOption
          active={deliveryMethod === "pickup"}
          text={t("checkout.pickup")}
          icon="person-walking"
          onPress={() => chooseMethod("pickup")}
        />
        <CardOption
          active={deliveryMethod === "car"}
          text={t("checkout.by_car")}
          icon="truck"
          disabled
          onPress={() => chooseMethod("car")}
        />
      </View>
    </View>
  );
};

export default Delivery;
