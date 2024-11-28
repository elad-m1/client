import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
  BottomSheetView
} from "@gorhom/bottom-sheet";
import {Formik} from "formik";
import React, {FC, RefAttributes, forwardRef} from "react";
import {useTranslation} from "react-i18next";
import {Keyboard} from "react-native";
import * as Yup from "yup";

import {Button} from "@/components";
import {SCREEN_HEIGHT, scale} from "@/utils/sizing";
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
    const {styles, colors, bottom} = useStyle();

    const {t} = useTranslation();

    return (
      <BottomSheet
        ref={ref}
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
        enableDynamicSizing
        onClose={() => Keyboard.dismiss()}
        keyboardBehavior="interactive"
        keyboardBlurBehavior="restore"
        backgroundStyle={{backgroundColor: colors.background}}>
        <BottomSheetScrollView
          scrollEnabled={false}
          contentContainerStyle={styles.mainWrapper}>
          <Formik
            initialValues={{
              ccName: "",
              ccNumber: "",
              cvv: "",
              expDate: ""
            }}
            validationSchema={shownCardData ? null : CreditCardSchema}
            onSubmit={(values, {resetForm}) => {
              shownCardData ? removeCard(shownCardData.id) : addCard(values);
              resetForm();
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
                  disabled={!props.isValid && !shownCardData}
                  backgroundColor={shownCardData ? colors.error : undefined}
                />
              </>
            )}
          </Formik>
        </BottomSheetScrollView>
      </BottomSheet>
    );
  }
);

export default AddEditCard;
