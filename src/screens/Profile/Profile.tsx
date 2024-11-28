import {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Platform, Text, View} from "react-native";
import {Switch} from "react-native-gesture-handler";

import {SimpleHeader} from "@/components";
import {ThemeContext} from "@/context";
import {scale} from "@/utils/sizing";

import {ProfileCard, Section} from "./components";
import {useNav, useStyle} from "./hooks";

const Profile = () => {
  const {styles, colors} = useStyle();
  const {goToTermsConditions, goToEditProfile} = useNav();
  const {isDark, toggleTheme} = useContext(ThemeContext);
  const {t} = useTranslation();
  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader
        title={t("profile.header")}
        hideBackButton
        style={{marginBottom: scale(12)}}
      />
      <ProfileCard />
      <View style={styles.sectionsWrapper}>
        <Section
          title={t("profile.account.title")}
          settings={[
            {
              icon: "info",
              text: t("profile.account.account_details"),
              onPress: () => {}
            },
            {
              icon: "user",
              text: t("profile.account.edit_profile"),
              onPress: goToEditProfile
            }
          ]}
        />
        <Section
          title={t("profile.appearance.title")}
          settings={[
            {
              icon: "palette",
              text: t("profile.appearance.dark_theme"),
              endElement: (
                <Switch
                  trackColor={{true: colors.primary, false: colors.background}}
                  thumbColor={colors.onPrimary}
                  value={isDark}
                  onValueChange={toggleTheme}
                  style={{
                    transform: [{scale: Platform.OS === "ios" ? 0.65 : 1}]
                  }}
                />
              )
            }
          ]}
        />
        <Section
          title={t("profile.payment.title")}
          settings={[
            {
              icon: "credit-card",
              text: t("profile.payment.manage_payments"),
              onPress: () => {}
            }
          ]}
        />
        <Section
          title={t("profile.other.title")}
          settings={[
            {
              // @ts-ignore
              icon: "fa-brands fa-readme",
              text: t("profile.other.terms_conditions"),
              onPress: goToTermsConditions
            }
          ]}
        />
      </View>
    </View>
  );
};

export default Profile;
