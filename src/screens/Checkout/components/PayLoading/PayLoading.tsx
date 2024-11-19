import {FC} from "react";
import {ActivityIndicator} from "react-native";
import Animated from "react-native-reanimated";

import {Text} from "@/components";

import {useAnim, useStyle} from "./hooks";

interface Props {
  loading: boolean;
}

/**
 * A component that displays a loading state or a "Payment Complete" message, depending on the
 * value of the `loading` prop.
 *
 * @param {boolean} loading - If true, the component will display a loading animation. If false,
 * the component will display a "Payment Complete" message.
 */
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
