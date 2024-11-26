import React, {useContext} from "react";
import {Image, Text as RNText, View} from "react-native";

import {Text} from "@/components";
import {AuthContext} from "@/context";
import {scale} from "@/utils/sizing";

import {useStyle} from "./hooks";

const ProfileCard = () => {
  const {styles} = useStyle();
  const {userData} = useContext(AuthContext);

  return (
    <View style={styles.mainWrapper}>
      <Image source={{uri: "https://picsum.photos/200"}} style={styles.image} />
      <View style={styles.detailsWrapper}>
        <View>
          <RNText style={styles.name}>{userData.name}</RNText>
          <RNText style={styles.phoneNumber}>{userData.phoneNumber}</RNText>
        </View>
        <Text style={styles.rank}>{`general.rank.${userData.rank}`}</Text>
      </View>
    </View>
  );
};

export default ProfileCard;
