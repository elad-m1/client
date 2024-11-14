import {FC} from "react";
import {useTranslation} from "react-i18next";
import {ScrollView, Switch, View} from "react-native";

import {Button, Text} from "@/components";
import {Product} from "@/fragments";
import {scale} from "@/utils/sizing";

import {Appointments, Header, RecommendedProducts} from "./components";
import {useSheet} from "./hooks";
import useMisc from "./hooks/useMisc";
import useNav from "./hooks/useNav";

/**
 * The Home screen component.
 *
 * This component displays the header, the make appointment button, and the list of appointments and recommended products.
 *
 * @returns A JSX element representing the Home screen.
 */
const Home: FC = () => {
  const {styles, colors, bottom, isDark, toggleTheme} = useMisc();
  const {goToChooseDate} = useNav();
  const {productId, productSheetRef, openProduct} = useSheet();
  const {t} = useTranslation();

  return (
    <>
      <View style={styles.mainWrapper}>
        <Header />
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{false: undefined, true: colors.primary}}
          thumbColor={colors.onPrimary}
          style={{
            position: "absolute",
            top: scale(52),
            right: scale(24),
            transform: [{scale: 0.85}]
          }}
        />
        <Button
          text={t("home.make_appointment")}
          onPress={goToChooseDate}
          style={{width: "65%", marginVertical: scale(42), alignSelf: "center"}}
        />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: bottom * 1.5
          }}
          showsVerticalScrollIndicator={false}>
          <Appointments />
          <RecommendedProducts openProduct={openProduct} />
        </ScrollView>
      </View>
      <Product productId={productId} ref={productSheetRef} />
    </>
  );
};

export default Home;
