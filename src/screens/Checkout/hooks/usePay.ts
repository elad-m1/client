import {useState} from "react";

const usePay = () => {
  const [loading, setLoading] = useState(false);
  const [showPayLoading, setShowPayLoading] = useState(false);

  const submitPay = async () => {
    setLoading(true);
    setShowPayLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowPayLoading(false);
      }, 2000);
    }, 2500);
  };

  return {loading, submitPay, showPayLoading};
};

export default usePay;
