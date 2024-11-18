import {BottomSheetModal} from "@gorhom/bottom-sheet";
import {ReactNode, RefObject, createContext, useRef, useState} from "react";

export const ProductContext = createContext({
  productSheetRef: {} as RefObject<BottomSheetModal>,
  productId: "",
  openProduct: (id: string) => {}
});

const ProductProvider = ({children}: {children: ReactNode}) => {
  const [productId, setProductId] = useState<string>("");
  const productSheetRef = useRef<BottomSheetModal>(null);

  const openProduct = (id: string) => {
    setProductId(id);
    productSheetRef.current?.present();
  };

  return (
    <ProductContext.Provider
      value={{productSheetRef: productSheetRef, productId, openProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
