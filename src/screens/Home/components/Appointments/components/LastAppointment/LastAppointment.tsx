import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Text as RNText, View} from "react-native";

import {Button} from "@/components";
import {scale} from "@/utils/sizing";

import {useNav, useStyle} from "./hooks";

interface Props {}

/**
 * A functional component that renders a single last appointment.
 *
 * It displays a barber's name, the time from now when the appointment was made,
 * and the location of the appointment.
 *
 * It also includes a button to reschedule the appointment, though this is
 * currently not implemented.
 *
 * The component is a presentational component and does not handle any state or
 * side effects.
 *
 * @returns A JSX element representing a single last appointment.
 */
const LastAppointment: FC<Props> = () => {
  const {styles} = useStyle();
  const {goToChooseDate} = useNav();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <View style={{flex: 1, gap: scale(8)}}>
        <View style={[styles.row, {gap: scale(4)}]}>
          <RNText style={styles.barber}>יואב אורלב</RNText>
          <RNText style={styles.when}>לפני 5 ימים</RNText>
        </View>
        <RNText style={styles.where}>רחובות, רחוב בילו 52</RNText>
      </View>
      <Button
        onPress={goToChooseDate}
        text={t("home.reschedule")}
        textStyle={{fontSize: scale(10)}}
      />
    </View>
  );
};

export default LastAppointment;
