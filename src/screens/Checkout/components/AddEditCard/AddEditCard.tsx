import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import {Formik} from "formik";
import React, {FC, RefAttributes, RefObject, forwardRef} from "react";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";

import {Button} from "@/components";
import {CreditCard} from "@/utils/types";

import {Form} from "./components";
import {useStyle} from "./hooks";

interface Props {
  id?: string;
  cardData: CreditCard | null;
  addEditCardSheetRef: RefObject<BottomSheet>;
  addCard: (values: {
    ccName: string;
    ccNumber: string;
    cvv: string;
    expDate: string;
  }) => void;
  editCard: (
    id: string,
    values: {
      ccName: string;
      ccNumber: string;
      cvv: string;
      expDate: string;
    }
  ) => void;
  removeCard: (id: string) => void;
  openAddEditCardSheet: (id?: string) => void;
}

const CreditCardSchema = Yup.object({
  ccName: Yup.string().required(),
  ccNumber: Yup.string().required(),
  cvv: Yup.string().required(),
  expDate: Yup.string().required()
});

const AddEditCard: FC<Props & RefAttributes<BottomSheet>> = forwardRef(
  (
    {
      id,
      addCard,
      editCard,
      removeCard,
      addEditCardSheetRef,
      cardData,
      openAddEditCardSheet
    },
    ref
  ) => {
    const {styles, colors} = useStyle();

    const {t} = useTranslation();

    return (
      <BottomSheet
        ref={ref}
        snapPoints={["40%"]}
        backdropComponent={props => (
          <BottomSheetBackdrop
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            {...props}
          />
        )}
        index={-1}
        handleComponent={null}
        enablePanDownToClose
        backgroundStyle={{backgroundColor: colors.background}}>
        <BottomSheetView style={styles.mainWrapper}>
          <Formik
            initialValues={{
              ccName: "",
              ccNumber: "",
              cvv: "",
              expDate: ""
            }}
            onSubmit={addCard}
            validationSchema={CreditCardSchema}>
            {props => (
              <>
                <Form {...props} cardData={cardData} />
                <Button
                  onPress={props.handleSubmit}
                  text={t("general.done")}
                  style={styles.submitButton}
                />
              </>
            )}
          </Formik>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default AddEditCard;
