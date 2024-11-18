import {
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
import {useTranslation} from "react-i18next";
import {ScrollView} from "react-native-gesture-handler";

import {Button, SimpleHeader} from "@/components";

import {ProductsList, Recommendations} from "./components";
import {useNav, useStyle} from "./hooks";

const Cart: ForwardRefExoticComponent<{} & RefAttributes<BottomSheetModal>> =
  forwardRef((_props, ref) => {
    const {styles, colors} = useStyle();
    const {goToCheckout} = useNav();

    const {t} = useTranslation();

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={["100%"]}
        stackBehavior="push"
        backdropComponent={props => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
          />
        )}
        handleComponent={() => (
          <SimpleHeader
            title={t("cart.header")}
            icon="chevron-down"
            // @ts-ignore
            backOnPress={() => ref.current.dismiss()}
            backButtonBackground
            style={{backgroundColor: colors.background}}
          />
        )}
        backgroundStyle={{backgroundColor: colors.background}}>
        <BottomSheetView style={styles.mainWrapper}>
          <ScrollView>
            <ProductsList />
            <Recommendations />
          </ScrollView>
          <Button
            onPress={() => {
              goToCheckout();
              // @ts-ignore
              ref.current.dismiss();
            }}
            text={t("cart.go_to_checkout")}
            style={styles.checkoutButton}
          />
        </BottomSheetView>
      </BottomSheetModal>
    );
  });

export default Cart;
