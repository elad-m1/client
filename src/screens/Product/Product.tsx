import {Image, Text as RNText, View} from "react-native";

import {IconButton} from "@/components";

import {useData, useMisc, useNav} from "./hooks";

const Product = () => {
  const {styles} = useMisc();
  const {goBack} = useNav();
  const {hardcodedData} = useData();

  return (
    <View style={styles.mainWrapper}>
      <Image source={{uri: ""}} style={styles.image} />
      <IconButton icon="close" onPress={goBack} style={styles.closeButton} />
      <View style={styles.infoWrapper}>
        <RNText style={styles.title}>{hardcodedData.name}</RNText>
      </View>
    </View>
  );
};

export default Product;
