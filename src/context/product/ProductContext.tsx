import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {ReactNode, RefObject, createContext, useRef, useState} from "react";

const ProductContext = createContext({
  productSheetRef: {} as RefObject<BottomSheetModal>,
  productId: "",
  openProduct: (id: string) => {}
});

export const ProductProvider = ({children}: {children: ReactNode}) => {
  const [productId, setProductId] = useState<string>("");
  const productSheetRef = useRef<BottomSheetModal>(null);

  const openProduct = (id: string) => {
    setProductId(id);
    productSheetRef.current?.present();
  };

  return (
    <ProductContext.Provider value={{productSheetRef, productId, openProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
