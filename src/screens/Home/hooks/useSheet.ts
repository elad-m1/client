import BottomSheet, {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useRef} from "react";

const useSheet = () => {
  const nextAptSheetRef = useRef<BottomSheetModal>(null);

  const openNextAptSheet = () => {
    nextAptSheetRef.current?.present();
  };

  return {nextAptSheetRef, openNextAptSheet};
};

export default useSheet;
