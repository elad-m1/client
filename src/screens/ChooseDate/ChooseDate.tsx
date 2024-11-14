import moment from "moment";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Pressable, Text as RNText, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {FlatList} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";
import {scale} from "@/utils/sizing";

import {SuccessSheet} from "./components";
import {useData, useMisc, useSheet} from "./hooks";

/**
 * Screen for choosing a date and time for an appointment.
 *
 * @returns A JSX.Element representing the screen.
 */
const ChooseDate: FC = () => {
  const {styles, colors} = useMisc();
  const {isSuccessSheetOpen, openSuccessSheet} = useSheet();
  const {selectedDate, selectedTime, handleDateSelect, handleTimeSelect} =
    useData();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title={t("make_appointment.header")} />
      <Calendar
        style={styles.calendar}
        theme={{
          contentStyle: {backgroundColor: colors.background},
          calendarBackground: colors.background,
          todayTextColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.onPrimary,
          dayTextColor: colors.text,
          monthTextColor: colors.text,
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          arrowColor: colors.primary
        }}
        markedDates={{
          [moment(selectedDate).format("YYYY-MM-DD")]: {
            selected: true
          }
        }}
        onDayPress={handleDateSelect}
      />
      {selectedDate && (
        <FlatList
          data={[
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30"
          ]}
          renderItem={({item}) => (
            <Pressable
              key={item}
              onPress={() => handleTimeSelect(item)}
              style={({pressed}) => [
                styles.timeTag,
                {
                  opacity: pressed ? 0.65 : 1,
                  backgroundColor:
                    selectedTime === item ? colors.primary : colors.card,
                  borderColor:
                    selectedTime === item ? colors.primary : colors.border
                }
              ]}>
              <RNText
                style={[
                  styles.timeTagText,
                  {
                    color:
                      selectedTime === item ? colors.onPrimary : colors.text
                  }
                ]}>
                {item}
              </RNText>
            </Pressable>
          )}
          numColumns={3}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-evenly"
          }}
          showsVerticalScrollIndicator={false}
          style={{height: "80%", marginBottom: scale(12)}}
        />
      )}
      <Button
        text={t("general.done")}
        onPress={openSuccessSheet}
        style={{width: "85%", alignSelf: "center"}}
        disabled={!selectedDate || !selectedTime}
      />
      {isSuccessSheetOpen && (
        <SuccessSheet selectedDate={selectedDate} selectedTime={selectedTime} />
      )}
    </View>
  );
};

export default ChooseDate;
