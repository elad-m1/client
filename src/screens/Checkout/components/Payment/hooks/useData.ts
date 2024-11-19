import {useEffect} from "react";

import {storage} from "@/storage/mmkv";
import {CreditCard} from "@/utils/types";

const useData = () => {
  const paymentMethods = storage.getAllKeys().map(key => {
    const value = storage.getString(key);
    if (!value) return null;
    return {...JSON.parse(value), id: key} as CreditCard;
  });

  return {paymentMethods};
};

export default useData;
