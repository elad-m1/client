import {useState} from "react";
import {NativeScrollEvent, NativeSyntheticEvent} from "react-native";
import {interpolate} from "react-native-reanimated";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const animScrollY = interpolate(scrollY, [0, 50], [0, 50], "clamp");

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setScrollY(event.nativeEvent.contentOffset.y);

  return {scrollY, onScroll, animScrollY};
};

export default useScroll;
