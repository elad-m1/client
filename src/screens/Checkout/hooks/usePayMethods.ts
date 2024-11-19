import BottomSheet from "@gorhom/bottom-sheet";
import {useEffect, useRef, useState} from "react";
import {v4} from "uuid";

import {storage} from "@/storage/mmkv";
import {CreditCard} from "@/utils/types";

const usePayMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<CreditCard[]>([]);
  const [shownCardData, setShownCardData] = useState<CreditCard | null>(null);
  const [loadingMethods, setLoadingMethods] = useState(true);

  const addEditCardSheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    loadPaymentMethods();
    setLoadingMethods(false);
  }, []);

  const loadPaymentMethods = () => {
    setLoadingMethods(true);
    setPaymentMethods(
      storage.getAllKeys().map(key => {
        const value = storage.getString(key);
        return JSON.parse(value ?? "") as CreditCard;
      })
    );
    console.log(paymentMethods);
    setLoadingMethods(false);
  };

  const openAddEditCardSheet = (id?: string) => {
    if (id)
      setShownCardData(paymentMethods.find(item => item.id === id) ?? null);
    else setShownCardData(null);
    addEditCardSheetRef.current?.expand();
  };

  const closeAddEditCardSheet = () => {
    addEditCardSheetRef.current?.close();
  };

  const addCard = (values: Partial<CreditCard>) => {
    const id = v4();
    storage.set(id, JSON.stringify({id, ...values}));
    setShownCardData(null);
    closeAddEditCardSheet();
  };

  const removeCard = (id: string) => {
    storage.delete(id);
    closeAddEditCardSheet();
  };

  return {
    paymentMethods,
    loadingMethods,
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
