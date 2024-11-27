import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {ReactNode, RefObject, createContext, useEffect, useRef} from "react";

const PickPictureContext = createContext({
  pickPictureRef: {} as RefObject<BottomSheetModal>,
  openPickPicture: () => {}
});

export const PickPictureProvider = ({children}: {children: ReactNode}) => {
  const pickPictureRef = useRef<BottomSheetModal>(null);

  const openPickPicture = () => {
    pickPictureRef.current?.present();
  };

  return (
    <PickPictureContext.Provider value={{pickPictureRef, openPickPicture}}>
      {children}
    </PickPictureContext.Provider>
  );
};

export default PickPictureContext;
