import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const goToCart = () => navigation.navigate("Cart");

  return {goToCart};
};

export default useNav;
