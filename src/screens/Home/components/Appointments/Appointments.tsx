import moment from "moment";
import {FC} from "react";
import {I18nManager, Pressable, Text as RNText, View} from "react-native";

import {IconButton, Text} from "@/components";
import {scale} from "@/utils/sizing";

import {LastAppointment} from "./components";
import {useStyle} from "./hooks";

interface Props {
  openNextAptSheet: () => void;
}

/**
 * A functional component that renders the Appointments screen.
 *
 * Displays the next appointment title and details including the time from now and the service details.
 * It also renders a list of last appointments using the `LastAppointment` component.
 *
 * @returns A JSX element representing the Appointments screen.
 */
const Appointments: FC<Props> = ({openNextAptSheet}) => {
  const {styles, colors} = useStyle();

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.nextAppointmentWrapper}>
        <Text style={styles.sectionTitle}>home.next_appointment</Text>
        <Pressable
          onPress={openNextAptSheet}
          style={({pressed}) => [
            styles.nextAppointmentDetailWrapper,
            {opacity: pressed ? 0.5 : 1, marginTop: scale(8)}
          ]}>
          <View>
            <RNText style={styles.nextAppointmentWhen}>
              {moment(new Date().setDate(new Date().getDate() + 100)).fromNow()}
            </RNText>
            <RNText style={styles.nextAppointmentWhere}>
              צבעים ופן אצל יואב אורלב בבילו 52
            </RNText>
          </View>
          <View
            style={{flexDirection: "row", alignItems: "center", gap: scale(3)}}>
            <IconButton
              mode="text"
              // @ts-ignore
              icon="fa-brands fa-waze"
              elevation={false}
              size={scale(18)}
              onPress={() => {}}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.lastAppointmentsWrapper}>
        <Text style={styles.sectionTitle}>home.last_appointments</Text>
        <View
          style={[
            styles.lastAppointmentsListWrapper,
            {marginVertical: scale(16)}
          ]}>
          {Array.from({length: 2}).map((_, index) => (
            <LastAppointment key={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Appointments;
