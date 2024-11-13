import {FC} from "react";
import {Image, View} from "react-native";

import {Text} from "@/components";
import {scale} from "@/utils/sizing";

import {useMisc} from "./hooks";

const Header: FC = () => {
  const {styles, colors} = useMisc();

  return (
    <View style={styles.mainWrapper}>
      <Image source={{uri: ""}} style={styles.profileImage} />
      <Text style={styles.title}>home.title</Text>
    </View>
  );
};

export default Header;
