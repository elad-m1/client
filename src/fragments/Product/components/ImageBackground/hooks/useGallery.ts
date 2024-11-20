import {useState} from "react";
import {ViewToken} from "react-native";

const useGallery = () => {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const onViewableItemsChanged = ({
    changed
  }: {
    viewableItems: ViewToken<string>[];
    changed: ViewToken<string>[];
  }) => {
    if (changed[0].isViewable) setGalleryIndex(changed[0].index ?? 0);
  };
  return {
    galleryIndex,
    onViewableItemsChanged
  };
};

export default useGallery;
