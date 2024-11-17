import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ScrollView, Switch, View} from "react-native";

import {Button, Header} from "@/components";
import {Product} from "@/fragments";
import {scale} from "@/utils/sizing";

import {Appointments, Greeting, RecommendedProducts} from "./components";
import {useSheet} from "./hooks";
import useNav from "./hooks/useNav";
import useStyle from "./hooks/useStyle";

/**
 * The Home screen component.
 *
 * This component displays the header, the make appointment button, and the list of appointments and recommended products.
 *
 * @returns A JSX element representing the Home screen.
 */
const Home: FC = () => {
  const {styles, colors, bottom, isDark, toggleTheme} = useStyle();
  const {goToChooseDate} = useNav();
  const {productId, productSheetRef, openProduct} = useSheet();
  const {t} = useTranslation();

  return (
    <>
      <View style={styles.mainWrapper}>
        <Header />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: bottom * 1.5
          }}
          showsVerticalScrollIndicator={false}>
          <Greeting />
          <Button
            text={t("home.make_appointment")}
            onPress={goToChooseDate}
            style={{
              width: "65%",
              marginVertical: scale(16),
              alignSelf: "center"
            }}
          />
          <Appointments />
          <RecommendedProducts openProduct={openProduct} />
        </ScrollView>
      </View>
      <Product productId={productId} ref={productSheetRef} />
    </>
  );
};

export default Home;
