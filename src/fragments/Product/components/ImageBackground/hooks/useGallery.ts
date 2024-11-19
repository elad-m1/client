import {useState} from "react";
import {NativeScrollEvent, NativeSyntheticEvent} from "react-native";

import {SCREEN_WIDTH} from "@/utils/sizing";

const useGallery = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setGalleryIndex(
      Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH)
    );
  };

  return {
    galleryIndex,
    onScroll
  };
};

export default useGallery;
