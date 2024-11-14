import {FC, useContext} from "react";
import {Image, View} from "react-native";

import {Button, IconButton} from "@/components";
import ThemeContext from "@/context/theme/ThemeContext";

import useMisc from "./hooks/useMisc";

const Header: FC = () => {
  const {styles, colors} = useMisc();
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <View style={[styles.mainWrapper, {direction: "ltr"}]}>
      {/* <View style={styles.buttonSection}>
        <IconButton
          mode="contained"
          icon="medal"
          onPress={() => {}}
          elevation={false}
          style={styles.button}
        />
        <IconButton
          mode="contained"
          icon="cart-shopping"
          onPress={toggleTheme}
          elevation={false}
          style={styles.button}
        />
      </View>
      <View style={styles.buttonSection}>
        <Button
          icon="coins"
          text={(1224).toLocaleString()}
          onPress={() => {}}
          iconColor={colors.text}
          style={styles.button}
          textStyle={{color: colors.text}}
        />
        <IconButton
          mode="contained"
          icon="cart-shopping"
          onPress={() => {}}
          style={styles.button}
          elevation={false}
          badge={2}
        />
      </View> */}
      <View style={styles.buttonSection}>
        <IconButton
          mode="contained"
          icon="cart-shopping"
          onPress={() => {}}
          style={styles.button}
          elevation={false}
          badge={2}
        />
        <Button
          icon="coins"
          text={(1224).toLocaleString()}
          onPress={() => {}}
          iconColor={colors.text}
          style={styles.button}
          textStyle={{color: colors.text}}
        />
        <IconButton
          mode="contained"
          icon="user"
          onPress={toggleTheme}
          elevation={false}
          style={styles.button}
        />
        <IconButton
          mode="contained"
          icon="medal"
          onPress={() => {}}
          elevation={false}
          style={styles.button}
        />
      </View>
      <Image
        source={require("@/assets/images/logo.jpeg")}
        style={styles.logo}
      />
    </View>
  );
};

export default Header;
