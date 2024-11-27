import {useState} from "react";
import {
  Asset,
  launchCamera,
  launchImageLibrary
} from "react-native-image-picker";

const useGallery = () => {
  const [chosenImage, setChosenImage] = useState<Asset | null>(null);

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      selectionLimit: 1
    });
    if (!result.didCancel || !result.assets) return;
    setChosenImage(result.assets[0]);
  };

  const removeImage = () => {
    setChosenImage(null);
    // SUPPOSED TO REMOVE PROFILE PICTURE, BUT NO BACKEND EXISTS FOR NOW
  };

  return {
    chosenImage,
    pickImage,
    removeImage
  };
};

export default useGallery;
