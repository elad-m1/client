import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import {ForwardRefExoticComponent, RefAttributes, forwardRef} from "react";
import {Text as RNText, View} from "react-native";

import {Footer, ImageBackground, InfoHeader} from "./components";
import {useData, useMisc, useNav} from "./hooks";

interface Props {
  productId: string;
}

/**
 * A screen that displays a product.
 *
 * @returns {JSX.Element} The element representing the product screen.
 */
const Product: ForwardRefExoticComponent<
  Props & RefAttributes<BottomSheetModal>
> = forwardRef(({productId}, ref) => {
  const {styles} = useMisc();
  const {goBack} = useNav();
  const {hardcodedData, ...dataProps} = useData(productId);

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={["65%"]}
      handleComponent={null}
      backdropComponent={props => (
        <BottomSheetBackdrop
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          {...props}
        />
      )}>
      <BottomSheetView style={styles.mainWrapper}>
        <ImageBackground {...hardcodedData} />
        <InfoHeader {...hardcodedData} credits={3} />
        <RNText style={styles.description}>{hardcodedData.description}</RNText>
        <Footer {...dataProps} />
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default Product;