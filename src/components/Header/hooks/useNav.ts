import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToRank = () => navigation.navigate("Rank");

  return {goToRank};
};

export default useNav;
