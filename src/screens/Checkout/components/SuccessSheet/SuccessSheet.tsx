import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import LottieView from "lottie-react-native";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {I18nManager, View} from "react-native";

import {Button, Text} from "@/components";
import {scale} from "@/utils/sizing";

import {useNav, useStyle} from "./hooks";

/**
 * A BottomSheet component that displays a success animation and a button to go back home when a user successfully makes an appointment.
 *
 * It uses the `useStyle` hook to get the styles and the `useNav` hook to get the navigation functions.
 *
 * The component is a presentational component and does not handle any state or side effects.
 *
 * @returns A JSX element representing the success sheet.
 */

interface Props {
  closeSuccessSheet: () => void;
}

const SuccessSheet: FC<Props> = ({closeSuccessSheet}) => {
  const {styles, colors, bottom} = useStyle();
  const {goBackHome} = useNav();

  const {t} = useTranslation();

  return (
    <BottomSheet
      snapPoints={["35%"]}
      index={0}
      handleComponent={null}
      animateOnMount={true}
      backgroundStyle={{backgroundColor: colors.background}}
      backdropComponent={props => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          onPress={goBackHome}
          {...props}
        />
      )}>
      <LottieView
        source={{
          uri: "https://lottie.host/00f67e4d-a3d6-44ec-aa65-fdfdd492f145/zGzpFe2VBR.json"
        }}
        autoPlay
        loop={false}
        style={{height: scale(150), width: "100%"}}
      />
      <View style={styles.labelsWrapper}>
        <Text style={styles.success}>checkout.payment_complete</Text>
      </View>
      <Button
        onPress={goBackHome}
        text={t("checkout.back_to_home")}
        style={styles.backHomeButton}
      />
    </BottomSheet>
  );
};

export default SuccessSheet;
