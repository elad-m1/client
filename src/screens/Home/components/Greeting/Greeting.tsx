import {FC, useContext} from "react";
import {Image, Pressable, View} from "react-native";

import {Text} from "@/components";
import {PickPictureContext} from "@/context";

import {useStyle} from "./hooks";

const Greeting: FC = () => {
  const {styles} = useStyle();
  const {openPickPicture} = useContext(PickPictureContext);
  return (
    <View style={styles.mainWrapper}>
      <Pressable
        onPress={openPickPicture}
        style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}>
        <Image
          source={{uri: "https://picsum.photos/200"}}
          style={styles.profileImage}
        />
      </Pressable>
      <Text style={styles.title}>home.title</Text>
    </View>
  );
};

export default Greeting;
