import {useNavigation} from "@react-navigation/native";
import {useRef, useState} from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView
} from "react-native";

import {MainNavigationProp} from "@/navigation/MainNavigator";
import {SCREEN_WIDTH} from "@/utils/sizing";

const useNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  // const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
  //   setCurrentIndex(
  //     Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH),
  //   );

  // const goNext = () => {
  //   setCurrentIndex(value => value + 1);
  //   scrollViewRef.current?.scrollTo({
  //     x: SCREEN_WIDTH * currentIndex,
  //     y: 0,
  //     animated: true,
  //   });
  // };

  // const goPrevious = () => {
  //   setCurrentIndex(value => value - 1);
  //   scrollViewRef.current?.scrollTo({
  //     x: SCREEN_WIDTH * currentIndex,
  //     y: 0,
  //     animated: true,
  //   });
  // };

  const navigation = useNavigation<MainNavigationProp>();

  const onScrollEnd = () => {};
  const goNext = () => {
    navigation.navigate("ChooseService");
  };
  const goPrevious = () => {};

  return {scrollViewRef, goNext, goPrevious, onScrollEnd};
};

export default useNav;
