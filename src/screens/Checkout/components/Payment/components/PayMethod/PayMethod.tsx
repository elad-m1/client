import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC, memo} from "react";
import {I18nManager, Pressable, Text as RNText, View} from "react-native";

import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {
  name: string;
  methodType: string;
  ccNumber: string;
}

const PayMethod: FC<Props> = memo(({name, methodType, ccNumber}) => {
  const {styles, colors} = useStyle();

  return (
    <Pressable
      style={({pressed}) => [styles.mainWrapper, {opacity: pressed ? 0.5 : 1}]}>
      <FontAwesomeIcon
        // @ts-ignore
        icon="fa-brands fa-cc-visa"
        color={colors.text}
        size={scale(21)}
      />
      <View style={styles.infoWrapper}>
        <View style={styles.nameWrapper}>
          <RNText style={styles.name}>{name}</RNText>
          <RNText style={styles.methodType}>{methodType}</RNText>
        </View>
        <RNText style={styles.ccNumber}>
          {ccNumber
            .slice(ccNumber.length - 4, ccNumber.length)
            .padStart(12, "*")}
        </RNText>
      </View>
      <FontAwesomeIcon
        icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
        color={colors.text}
        size={scale(14)}
        style={{marginStart: "auto"}}
      />
    </Pressable>
  );
});

export default PayMethod;
