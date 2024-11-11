import {useEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Easing,
  ReduceMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {SCREEN_HEIGHT} from '@/utils/sizing';

const useAnim = (hairColor: string) => {
  const yValue = useSharedValue(SCREEN_HEIGHT * 1.2);

  const {bottom} = useSafeAreaInsets();

  const inAnim = () => {
    yValue.value = withTiming((SCREEN_HEIGHT - bottom) * 0.95, {
      duration: 450,
      easing: Easing.out(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  };

  const outAnim = () => {
    yValue.value = withTiming(SCREEN_HEIGHT * 1.2, {
      duration: 450,
      easing: Easing.out(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });
  };

  useEffect(() => {
    if (hairColor.length === 0) outAnim();
    else if (yValue.value !== SCREEN_HEIGHT * 0.9) inAnim();
  }, [hairColor]);

  return {yValue};
};

export default useAnim;
