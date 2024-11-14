import {useEffect, useState} from "react";

const useData = () => {
  const hardcodedData = {
    name: "שמפו נקה 7",
    description: "Product Description",
    price: "Product Price",
    image: "Product Image"
  };
  return {
    hardcodedData
  };
};

export default useData;
