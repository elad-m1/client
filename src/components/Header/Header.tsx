import {FC, useContext} from "react";
import {Image, View} from "react-native";

import {Button, IconButton} from "@/components";
import {ShoppingCartContext, ThemeContext} from "@/context";

import useNav from "./hooks/useNav";
import useStyle from "./hooks/useStyle";

const Header: FC = () => {
  const {toggleTheme} = useContext(ThemeContext);
  const {openShoppingCart} = useContext(ShoppingCartContext);
  const {styles, colors} = useStyle();
  const {} = useNav();
  return (
    <View style={[styles.mainWrapper, {direction: "ltr"}]}>
      <View style={styles.buttonSection}>
        <IconButton
          mode="contained"
          icon="cart-shopping"
          onPress={openShoppingCart}
          style={styles.button}
          elevation={false}
          badge={2}
        />
        <Button
          icon="coins"
          text={(1224).toLocaleString()}
          onPress={() => {}}
          iconColor={colors.text}
          backgroundColor={colors.card}
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
