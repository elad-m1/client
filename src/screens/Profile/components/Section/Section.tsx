import React, {FC, useContext} from "react";
import {useTranslation} from "react-i18next";
import {Text as RNText, View} from "react-native";

import {AuthContext} from "@/context";
import {Setting as SettingType} from "@/utils/types";

import {Setting} from "./components";
import {useStyle} from "./hooks";

interface Props {
  title: string;
  settings: SettingType[];
}

const Section: FC<Props> = ({title, settings}) => {
  const {styles} = useStyle();
  const {userData} = useContext(AuthContext);

  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <RNText style={styles.title}>{title}</RNText>
      <View style={styles.settingsWrapper}>
        {settings.map((setting, index) => (
          <>
            <Setting key={index} {...setting} />
            {index !== 2 && <View style={styles.divider} />}
          </>
        ))}
      </View>
    </View>
  );
};

export default Section;
