import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {AuthNavigationProp} from '@/navigation/AuthNavigator';

const useNav = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const route = useRoute<RouteProp<{}>>();

  const phoneData = route.params as {code: string; phoneNumber: string};

  const goToRegister = () => navigation.navigate('Register');

  return {goToRegister, phoneData};
};

export default useNav;
