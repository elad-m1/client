import moment from "moment";
import {FC} from "react";
import {Text as RNText, View} from "react-native";

import {Text} from "@/components";
import {scale} from "@/utils/sizing";

import {LastAppointment} from "./components";
import {useMisc} from "./hooks";

/**
 * A functional component that renders the Appointments screen.
 *
 * Displays the next appointment title and details including the time from now and the service details.
 * It also renders a list of last appointments using the `LastAppointment` component.
 *
 * @returns A JSX element representing the Appointments screen.
 */
const Appointments: FC = () => {
  const {styles} = useMisc();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.nextAppointmentTitle}>home.next_appointment</Text>
      <View style={styles.nextAppointmentDetailWrapper}>
        <RNText style={styles.nextAppointmentDetail}>
          {moment(new Date().setDate(new Date().getDate() + 4)).fromNow()}
        </RNText>
        <RNText style={styles.nextAppointmentDetail}>
          צבעים ופן אצל יואב אורלב בבילו 52
        </RNText>
      </View>
      <View
        style={[styles.lastAppointmentsWrapper, {marginVertical: scale(24)}]}>
        {Array.from({length: 2}).map((_, index) => (
          <LastAppointment key={index} />
        ))}
      </View>
    </View>
  );
};

export default Appointments;
