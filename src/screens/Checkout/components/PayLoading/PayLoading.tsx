import {FC} from "react";
import {ActivityIndicator} from "react-native";
import Animated from "react-native-reanimated";

import {Text} from "@/components";

import {useAnim, useStyle} from "./hooks";

interface Props {
  loading: boolean;
}

const PayLoading: FC<Props> = ({loading}) => {
  const {styles, colors} = useStyle();
  const {opacityVal} = useAnim(loading);
  return (
    <Animated.View style={[styles.mainWrapper, {opacity: opacityVal}]}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <Text style={styles.paymentComplete}>checkout.payment_complete</Text>
      )}
    </Animated.View>
  );
};

export default PayLoading;
