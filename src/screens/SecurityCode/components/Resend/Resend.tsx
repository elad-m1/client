import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {FC} from "react";
import {Pressable, View} from "react-native";

import {Text} from "@/components";
import {scale} from "@/utils/sizing";

import useStyle from "./hooks/useStyle";

interface Props {
  resendThrottle: boolean;
  activateResendThrottle: () => void;
}

const Resend: FC<Props> = ({resendThrottle, activateResendThrottle}) => {
  const {styles, colors} = useStyle();

  return (
    <View style={styles.resendWrapper}>
      {resendThrottle ? (
        <View
          style={{flexDirection: "row", alignItems: "center", gap: scale(2)}}>
          <Text style={styles.subTitle}>verification.resend_after_minute</Text>
          <Text style={[styles.subTitle, {fontWeight: "900"}]}>
            verification.minute
          </Text>
        </View>
      ) : (
        <Pressable
          onPress={() => {
            // sendVerifCode(phoneData.phoneNumber);
            activateResendThrottle();
          }}
          style={({pressed}) => ({
            flexDirection: "row",
            alignItems: "center",
            opacity: pressed ? 0.5 : 1
          })}>
          <FontAwesomeIcon
            icon="rotate-right"
            color={colors.primary}
            size={scale(16)}
          />
          <Text style={styles.resendText}>verification.resend</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Resend;
