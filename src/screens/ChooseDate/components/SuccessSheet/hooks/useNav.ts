import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

import {
  MainNavigationProp,
  MainStackParamList
} from "@/navigation/MainNavigator";

/**
 * A hook that provides navigation functions for the SuccessSheet component.
 *
 * The hook provides a single function, goBackHome, which navigates back to the Home screen.
 *
 * The hook also returns the route parameters passed to the SuccessSheet component.
 *
 * @returns An object containing the goBackHome function and the route parameters.
 */
const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const route = useRoute<RouteProp<MainStackParamList>>();

  const goBackHome = () => navigation.popToTop();

  const params = route.params;

  return {goBackHome, ...params};
};

export default useNav;
