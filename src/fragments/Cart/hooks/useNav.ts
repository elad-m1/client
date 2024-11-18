import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToCheckout = () => navigation.navigate("Checkout");

  return {goToCheckout};
};

export default useNav;
