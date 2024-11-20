import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {TextInput, View} from "react-native";

import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {
  searchQuery: string;
  onChangeSearch: (value: string) => void;
}

const Header: FC<Props> = ({searchQuery, onChangeSearch}) => {
  const {styles, colors} = useStyle();

  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchBarWrapper}>
        <FontAwesomeIcon
          icon="search"
          color={colors.textSecondary}
          size={scale(14)}
        />
        <TextInput
          value={searchQuery}
          onChangeText={onChangeSearch}
          placeholder={t("shop.search")}
          placeholderTextColor={colors.textSecondary}
          style={styles.searchBarInput}
        />
      </View>
    </View>
  );
};

export default Header;
