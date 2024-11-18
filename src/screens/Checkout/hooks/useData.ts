import {useState} from "react";
import {DateData} from "react-native-calendars";

const useData = () => {
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "car">(
    "pickup"
  );

  const chooseMethod = (method: typeof deliveryMethod) =>
    setDeliveryMethod(method);

  return {deliveryMethod, chooseMethod};
};

export default useData;
