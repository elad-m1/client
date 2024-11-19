import {useEffect} from "react";
import {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

const useAnim = (loading: boolean) => {
  const opacityVal = useSharedValue(0);

  const inAnim = () => {
    opacityVal.value = withTiming(1, {
      duration: 500,
      easing: Easing.out(Easing.quad),
      reduceMotion: ReduceMotion.System
    });
  };

  const outAnim = () => {
    opacityVal.value = withTiming(0, {
      duration: 500,
      easing: Easing.out(Easing.quad),
      reduceMotion: ReduceMotion.System
    });
  };

  useEffect(() => {
    if (loading) inAnim();
    else
      setTimeout(() => {
        outAnim();
      }, 1000);
  }, [loading]);

  return {opacityVal, inAnim, outAnim};
};

export default useAnim;
