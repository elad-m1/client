import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";

import {
  AuthNavigationProp,
  AuthStackParamList
} from "@/navigation/AuthNavigator";

const useNav = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const route = useRoute<RouteProp<AuthStackParamList>>();

  const phoneData = route.params;

  const goToRegister = () => navigation.navigate("Register");

  return {goToRegister, phoneData};
};

export default useNav;
