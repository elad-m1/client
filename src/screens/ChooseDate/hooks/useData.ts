import {useState} from "react";
import {DateData} from "react-native-calendars";

const useData = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDateSelect = (date: DateData) => {
    setSelectedDate(new Date(date.dateString));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return {selectedDate, selectedTime, handleDateSelect, handleTimeSelect};
};

export default useData;
