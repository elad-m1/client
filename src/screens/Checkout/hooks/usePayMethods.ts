import BottomSheet from "@gorhom/bottom-sheet";
import {useEffect, useRef, useState} from "react";
import {v4} from "uuid";

import {storage} from "@/storage/mmkv";
import {CreditCard} from "@/utils/types";

const usePayMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<CreditCard[]>([]);
  const [shownCardData, setShownCardData] = useState<CreditCard | null>(null);

  const addEditCardSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  const loadPaymentMethods = () => {
    setPaymentMethods(
      storage.getAllKeys().map(key => {
        const value = storage.getString(key);
        return JSON.parse(value ?? "") as CreditCard;
      })
    );
  };

  const addCard = (values: Partial<CreditCard>) => {
    const id = v4();
    storage.set(id, JSON.stringify({id, ...values}));
    loadPaymentMethods();
    closeAddEditCardSheet();
  };

  const removeCard = (id: string) => {
    storage.delete(id);
    loadPaymentMethods();
    closeAddEditCardSheet();
  };

  const openAddEditCardSheet = (id?: string) => {
    if (id)
      setShownCardData(paymentMethods.find(item => item.id === id) ?? null);
    else setShownCardData(null);
    addEditCardSheetRef.current?.expand();
  };

  const closeAddEditCardSheet = () => {
    addEditCardSheetRef.current?.close();
    setShownCardData(null);
  };

  return {
    paymentMethods,
    loadPaymentMethods,
    shownCardData,
    addEditCardSheetRef,
    addCard,
    removeCard,
    openAddEditCardSheet,
    closeAddEditCardSheet
  };
};

export default usePayMethods;
