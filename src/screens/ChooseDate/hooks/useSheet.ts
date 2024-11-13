import {useState} from "react";

/**
 * A hook that manages the state of the success sheet in the Choose Date screen.
 *
 * @returns An object with two properties: `isSuccessSheetOpen` and `openSuccessSheet`.
 * `isSuccessSheetOpen` is a boolean that indicates if the success sheet is open.
 * `openSuccessSheet` is a function that sets `isSuccessSheetOpen` to true.
 */
const useSheet = () => {
  const [isSuccessSheetOpen, setIsSuccessSheetOpen] = useState(false);

  const openSuccessSheet = () => setIsSuccessSheetOpen(true);

  return {isSuccessSheetOpen, openSuccessSheet};
};

export default useSheet;
