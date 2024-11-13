import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

import {
  MainNavigationProp,
  MainStackParamList
} from "@/navigation/MainNavigator";

/**
 * Custom hook to handle navigation logic for the appointment-making process.
 *
 * @param {string | null} selectedBarber - The currently selected barber or null if none is selected.
 * @param {string[]} selectedServices - An array of selected services.
 *
 * @returns {Object} An object containing:
 * - goToChooseDate: Function to navigate to the "ChooseDate" screen with selected barber and services.
 * - ...params: The parameters from the current route.
 */
const useNav = (selectedBarber: string | null, selectedServices: string[]) => {
  const navigation = useNavigation<MainNavigationProp>();

  const route = useRoute<RouteProp<MainStackParamList>>();

  const goToChooseDate = () =>
    selectedBarber &&
    navigation.navigate("ChooseDate", {
      barber: selectedBarber,
      services: selectedServices
    });

  const params = route.params;

  return {goToChooseDate, ...params};
};

export default useNav;
