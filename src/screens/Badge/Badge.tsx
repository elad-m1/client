import React from "react";
import {View} from "react-native";

import {SimpleHeader} from "@/components";

import {useStyle} from "./hooks";

const Badge = () => {
  const {styles} = useStyle();
  return (
    <View style={styles.mainWrapper}>
      <SimpleHeader title="Badge" icon="chevron-down" />
    </View>
  );
};

export default Badge;
