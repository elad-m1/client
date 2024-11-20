import React, {FC} from "react";
import {useTranslation} from "react-i18next";
import {ScrollView} from "react-native-gesture-handler";

import {Tag} from "@/components";
import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

interface Props {}

const Categories: FC<Props> = ({}) => {
  const {styles, colors} = useStyle();

  const {t} = useTranslation();

  return (
    <ScrollView
      style={styles.mainWrapper}
      contentContainerStyle={{gap: scale(4)}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {Array.from({length: 8}).map((_, index) => (
        <Tag text="שמפו ומרכך" key={index} />
      ))}
    </ScrollView>
  );
};

export default Categories;
