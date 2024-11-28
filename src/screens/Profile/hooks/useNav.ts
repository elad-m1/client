import {useNavigation} from "@react-navigation/native";

import {MainNavigationProp} from "@/navigation/MainNavigator";

const useNav = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const goToEditProfile = () => navigation.navigate("EditProfile");

  const goToTermsConditions = () => navigation.navigate("TermsConditions");

  return {goToTermsConditions, goToEditProfile};
};

export default useNav;
