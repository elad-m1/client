import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

/**
 * A hook that provides navigation functions for the Product component.
 *
 * The hook provides a single function, goBack, which navigates back to the previous screen.
 *
 * @returns An object containing the goBack function.
 */
const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goBack = () => navigation.pop();

  return {goBack};
};

export default useNav;
