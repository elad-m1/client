import {useState} from "react";

const useDate = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);

  const toggleIsDateOpen = () => setIsDateOpen(value => !value);

  return {isDateOpen, toggleIsDateOpen};
};

export default useDate;
