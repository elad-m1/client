import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  useContext
} from "react";
import {Text as RNText, View} from "react-native";

import {Loading} from "@/components";
import {ProductContext} from "@/context";

import {Footer, ImageBackground, InfoHeader} from "./components";
import {useData, useNav, useStyle} from "./hooks";

/**
 * A screen that displays a product.
 *
 * @returns {JSX.Element} The element representing the product screen.
 */
const Product: ForwardRefExoticComponent<{} & RefAttributes<BottomSheetModal>> =
  forwardRef((_props, ref) => {
    const {productId} = useContext(ProductContext);
    const {styles, colors} = useStyle();
    const {goBack} = useNav();
    const {hardcodedData, ...dataProps} = useData(productId);

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["65%"]}
        stackBehavior="push"
        handleComponent={null}
        backdropComponent={props => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
          />
        )}
        backgroundStyle={{backgroundColor: colors.card}}>
        <BottomSheetView style={styles.mainWrapper}>
          {dataProps.loading ? (
            <Loading />
          ) : (
            <>
              <ImageBackground {...hardcodedData} />
              <InfoHeader {...hardcodedData} credits={3} />
              <RNText style={styles.description}>
                {hardcodedData.description}
              </RNText>
              <Footer {...dataProps} />
            </>
          )}
        </BottomSheetView>
      </BottomSheetModal>
    );
  });

export default Product;
