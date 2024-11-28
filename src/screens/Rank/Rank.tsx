import React from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {SimpleHeader, Text} from "@/components";

import {useStyle} from "./hooks";

const Rank = () => {
  const {styles} = useStyle();

  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title={t("rank.header")} icon="chevron-down" />
      <View style={styles.ranksWrapper}>
        {[
          "junior",
          "rising_star",
          "stylist",
          "professional",
          "kali_king",
          "kali_master"
        ].map((rank, index) => (
          <View key={index} style={styles.rankWrapper}>
            <Text style={styles.rankTitle}>{"rank." + rank + ".title"}</Text>
            <Text style={styles.rankDescription}>
              {"rank." + rank + ".description"}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Rank;
