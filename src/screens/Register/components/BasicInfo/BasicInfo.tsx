import {FormikProps} from "formik";
import {FC} from "react";
import {useTranslation} from "react-i18next";
import {I18nManager, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {Button, Header} from "@/components";

import {Inputs} from "./components";
import useMisc from "./hooks/useMisc";

interface Props {}

const BasicInfo: FC<
  Props &
    FormikProps<{
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: string;
      hairColor: string;
    }>
> = formikProps => {
  const {styles} = useMisc();
  const {t} = useTranslation();
  const {top} = useSafeAreaInsets();
  return (
    <View style={styles.mainWrapper}>
      <Header title={t("register.basic_info.header")} />
      {/* <ImageBackground /> */}
      <Inputs {...formikProps} />
      <Button
        onPress={formikProps.handleSubmit}
        text={t("general.next")}
        icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
        style={{width: "80%", alignSelf: "center"}}
      />
    </View>
  );
};

export default BasicInfo;
