import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

/**
 * A hook that provides navigation functions for the Home screen.
 *
 * The hook provides a single function, goToChooseDate, which navigates to the ChooseService screen.
 *
 * @returns An object containing the goToChooseDate function.
 */
const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToChooseDate = () => navigation.navigate("ChooseService");

  return {goToChooseDate};
};

export default useNav;
