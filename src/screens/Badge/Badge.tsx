import React from "react";
import {View} from "react-native";

import {useStyle} from "./hooks";

const Badge = () => {
  const {styles} = useStyle();
  return <View style={styles.mainWrapper}></View>;
};

export default Badge;
