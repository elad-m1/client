import {useNavigation} from "@react-navigation/native";
import {useState} from "react";

import {MainNavigationProp} from "@/navigation/MainNavigator";
import {CartItem} from "@/utils/types";

const useData = () => {
  const navigation = useNavigation<MainNavigationProp>();

  const onSubmit = () => navigation.goBack();

  return {onSubmit};
};

export default useData;
