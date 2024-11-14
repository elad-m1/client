import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {useEffect, useRef, useState} from "react";

/**
 * A hook that provides a BottomSheet reference and a function to open it.
 *
 * The hook returns an object with two properties:
 * - `productSheetRef`: A reference to the BottomSheet component.
 * - `openProductSheetRef`: A function that calls the `expand` method on the BottomSheet component.
 *
 * @returns An object containing the productSheetRef and openProductSheetRef.
 */
const useSheet = () => {
  const [productId, setProductId] = useState<string>("");

  const productSheetRef = useRef<BottomSheetModal>(null);

  const openProduct = (id: string) => {
    setProductId(id);
    productSheetRef.current?.present();
  };

  return {productId, productSheetRef, openProduct};
};

export default useSheet;
