import {Formik} from "formik";
import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Image, Pressable, View} from "react-native";
import * as Yup from "yup";

import {Button, SimpleHeader} from "@/components";
import {PickPictureContext} from "@/context";

import {Inputs} from "./components";
import {useData, useStyle} from "./hooks";

const EditProfileSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  dateOfBirth: Yup.string().required()
});

const EditProfile = () => {
  const {styles} = useStyle();
  const {onSubmit} = useData();

  const {openPickPicture} = useContext(PickPictureContext);
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title={t("edit_profile.header")} />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dateOfBirth: new Date().toDateString()
        }}
        onSubmit={onSubmit}
        validateOnMount
        validateOnChange
        validationSchema={EditProfileSchema}>
        {formikProps => (
          <View style={styles.formWrapper}>
            <Pressable
              onPress={openPickPicture}
              style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
              <Image
                source={{uri: "https://picsum.photos/200"}}
                style={styles.profileImage}
              />
            </Pressable>
            <Inputs {...formikProps} />
            <Button
              onPress={formikProps.handleSubmit}
              text={t("general.save")}
              disabled={formikProps.isSubmitting || !formikProps.isValid}
              style={styles.saveButton}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditProfile;
