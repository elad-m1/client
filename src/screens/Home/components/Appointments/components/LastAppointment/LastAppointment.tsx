import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {Pressable, Text as RNText, View} from "react-native";

import {Button} from "@/components";
import {scale} from "@/utils/sizing";

import {useMisc} from "./hooks";

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
  const {styles} = useMisc();
  const {t} = useTranslation();
  return (
    <Pressable
      style={({pressed}) => [
        styles.mainWrapper,
        {opacity: pressed ? 0.65 : 1}
      ]}>
      <View style={{flex: 1, gap: scale(8)}}>
        <View style={[styles.row, {gap: scale(4)}]}>
          <RNText style={styles.barber}>יואב אורלב</RNText>
          <RNText style={styles.when}>לפני 5 ימים</RNText>
        </View>
        <RNText style={styles.where}>רחובות, רחוב בילו 52</RNText>
      </View>
      {/* <Button onPress={() => {}} text={t("home.reschedule")} /> */}
    </Pressable>
  );
};

export default LastAppointment;
