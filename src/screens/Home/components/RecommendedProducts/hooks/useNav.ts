import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

/**
 * A hook that provides navigation functions for the RecommendedProducts component.
 *
 * The hook provides a single function, goToProduct, which navigates to the Product screen with a specified product ID.
 *
 * @returns An object containing the goToProduct function.
 */
const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToProduct = () => navigation.navigate("Product", {id: "12345"});

  return {goToProduct};
};

export default useNav;
