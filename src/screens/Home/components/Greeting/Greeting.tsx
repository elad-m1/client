import {FC} from "react";
import {Image, View} from "react-native";

import {Text} from "@/components";

import {useStyle} from "./hooks";

const Greeting: FC = () => {
  const {styles, colors} = useStyle();

  return (
    <View style={styles.mainWrapper}>
      <Image
        source={{uri: "https://picsum.photos/200"}}
        style={styles.profileImage}
      />
      <Text style={styles.title}>home.title</Text>
    </View>
  );
};

export default Greeting;