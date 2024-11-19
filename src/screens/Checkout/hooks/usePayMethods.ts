import BottomSheet from "@gorhom/bottom-sheet";
import {useEffect, useRef, useState} from "react";
import {v4} from "uuid";

import {storage} from "@/storage/mmkv";
import {CreditCard} from "@/utils/types";

const usePayMethods = () => {
  const [cardData, setCardData] = useState<CreditCard | null>(null);
  const addEditCardSheetRef = useRef<BottomSheet>(null);

  const openAddEditCardSheet = (id?: string) => {
    if (id) {
      const card = storage.getString(id);
      if (card) setCardData(JSON.parse(card));
    } else setCardData(null);
    addEditCardSheetRef.current?.expand();
  };

  const addCard = (values: {
    ccName: string;
    ccNumber: string;
    cvv: string;
    expDate: string;
  }) => {
    storage.set(v4(), JSON.stringify(values));
  };

  const editCard = (
    id: string,
    values: {
      ccName: string;
      ccNumber: string;
      cvv: string;
      expDate: string;
    }
  ) => {
    storage.set(id, JSON.stringify(values));
  };

  const removeCard = (id: string) => {
    storage.delete(id);
  };

  return {
    cardData,
    addEditCardSheetRef,
    addCard,
    editCard,
    removeCard,
    openAddEditCardSheet
  };
};

export default usePayMethods;
