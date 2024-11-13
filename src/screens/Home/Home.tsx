import {useNavigation} from "@react-navigation/native";
import {FC, useContext} from "react";
import {useTranslation} from "react-i18next";
import {Image, ScrollView, View} from "react-native";

import {Button, Text} from "@/components";
import ThemeContext from "@/context/theme/ThemeContext";
import {MainNavigationProp} from "@/navigation/MainNavigator";
import {scale} from "@/utils/sizing";

import {Appointments, Header} from "./components";

const Home: FC = () => {
  const {colors} = useContext(ThemeContext);
  const {t} = useTranslation();

  const navigation = useNavigation<MainNavigationProp>();
  return (
    <View style={{flex: 1}}>
      <Header />
      <Button
        text={t("home.make_appointment")}
        onPress={() => navigation.navigate("ChooseService")}
        style={{width: "65%", marginVertical: scale(42), alignSelf: "center"}}
      />
      <ScrollView>
        <Appointments />
      </ScrollView>
    </View>
  );
};

export default Home;
