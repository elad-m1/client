import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goBackHome = () => navigation.popToTop();

  return {goBackHome};
};

export default useNav;
