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
  shownCardData: CreditCard | null;
  addCard: (values: {
    ccName: string;
    ccNumber: string;
    cvv: string;
    expDate: string;
  }) => void;
  removeCard: (id: string) => void;
  openAddEditCardSheet: (id?: string) => void;
  closeAddEditCardSheet: () => void;
}

const CreditCardSchema = Yup.object({
  ccName: Yup.string().required(),
  ccNumber: Yup.string().required(),
  cvv: Yup.string().required(),
  expDate: Yup.string().required()
});

const AddEditCard: FC<Props & RefAttributes<BottomSheet>> = forwardRef(
  ({id, addCard, removeCard, shownCardData}, ref) => {
    const {styles, colors} = useStyle();

    const {t} = useTranslation();

    return (
      <BottomSheet
        ref={ref}
        snapPoints={["38.5%"]}
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
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        backgroundStyle={{backgroundColor: colors.background}}>
        <BottomSheetView style={styles.mainWrapper}>
          <Formik
            initialValues={{
              ccName: "",
              ccNumber: "",
              cvv: "",
              expDate: ""
            }}
            validationSchema={shownCardData ? null : CreditCardSchema}
            onSubmit={values => {
              shownCardData ? removeCard(shownCardData.id) : addCard(values);
            }}
            validateOnMount
            validateOnChange
            validateOnBlur>
            {props => (
              <>
                <Form {...props} shownCardData={shownCardData} />
                <Button
                  onPress={props.handleSubmit}
                  text={t(shownCardData ? "general.remove" : "general.confirm")}
                  style={styles.submitButton}
                  disabled={
                    Object.values(props.errors).length !== 0 && !shownCardData
                  }
                  backgroundColor={shownCardData ? colors.error : undefined}
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
