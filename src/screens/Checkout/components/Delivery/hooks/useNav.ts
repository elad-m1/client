import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goBack = () => navigation.goBack();

  return {goBack};
};

export default useNav;
