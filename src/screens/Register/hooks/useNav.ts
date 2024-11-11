import {SCREEN_WIDTH} from '@/utils/sizing';
import {useRef, useState} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

const useNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) =>
    setCurrentIndex(
      Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH),
    );

  const goNext = () => {
    setCurrentIndex(value => value + 1);
    scrollViewRef.current?.scrollTo({
      x: SCREEN_WIDTH * currentIndex,
      y: 0,
      animated: true,
    });
  };

  const goPrevious = () => {
    setCurrentIndex(value => value - 1);
    scrollViewRef.current?.scrollTo({
      x: SCREEN_WIDTH * currentIndex,
      y: 0,
      animated: true,
    });
  };

  return {scrollViewRef, goNext, goPrevious, onScrollEnd};
};

export default useNav;
