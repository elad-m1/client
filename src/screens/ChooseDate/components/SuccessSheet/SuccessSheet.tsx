import BottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import LottieView from "lottie-react-native";
import moment from "moment";
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
  selectedDate: Date | null;
  selectedTime: string | null;
}

const SuccessSheet: FC<Props> = ({selectedDate, selectedTime}) => {
  const {styles, colors} = useStyle();
  const {goBackHome, barber, services} = useNav();

  const {t} = useTranslation();

  return (
    <BottomSheet
      snapPoints={["40%"]}
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
        <Text style={styles.success}>make_appointment.booking_success</Text>
        <View style={{gap: scale(4)}}>
          <Text
            i18nArgs={{
              date: moment(selectedDate).format(
                I18nManager.isRTL ? "DD MMM" : "MMM Do"
              ),
              time: selectedTime ?? ""
            }}
            style={styles.detailsLabel}>
            make_appointment.on_date
          </Text>
          <Text i18nArgs={{barber: barber}} style={styles.detailsLabel}>
            make_appointment.to_barber
          </Text>
          <Text
            i18nArgs={{services: services?.join(", ")}}
            style={styles.detailsLabel}>
            make_appointment.services_included
          </Text>
        </View>
      </View>
      <Button
        text={t("make_appointment.go_back")}
        style={{margin: scale(24)}}
        onPress={goBackHome}
      />
    </BottomSheet>
  );
};

export default SuccessSheet;
