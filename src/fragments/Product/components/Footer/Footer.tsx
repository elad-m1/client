import {FC} from "react";
import {useTranslation} from "react-i18next";
import {View} from "react-native";

import {Button, IconButton} from "@/components";
import {scale} from "@/utils/sizing";

import {useData, useMisc, useNav} from "./hooks";

interface Props {
  isLiked: boolean;
  isBookmarked: boolean;
  loading: boolean;
  toggleLike: () => void;
  toggleBookmark: () => void;
}

/**
 * A component that displays a footer with a heart icon to like the product,
 * an add-to-cart button, and a bookmark icon to bookmark the product.
 *
 * @param {Props} props
 * @prop {boolean} isLiked - Whether the product is liked or not.
 * @prop {boolean} isBookmarked - Whether the product is bookmarked or not.
 * @prop {() => void} toggleLike - A function to toggle the like state.
 * @prop {() => void} toggleBookmark - A function to toggle the bookmark state.
 *
 * @returns {JSX.Element} A view containing the heart icon, add-to-cart button,
 * and bookmark icon.
 */
const Footer: FC<Props> = ({
  isLiked,
  isBookmarked,
  toggleBookmark,
  toggleLike
}) => {
  const {styles, colors} = useMisc();
  const {} = useData();
  const {t} = useTranslation();

  return (
    <View style={styles.mainWrapper}>
      <IconButton
        mode="contained" // @ts-ignore
        icon={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
        onPress={toggleLike}
        color={colors.onPrimary}
        size={scale(18)}
        style={styles.iconButton}
      />
      <Button
        text={t("product.add_to_cart")}
        onPress={() => {}}
        icon="cart-plus"
        style={{flex: 1}}
      />
      <IconButton
        mode="contained" // @ts-ignore
        icon={isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}
        onPress={toggleBookmark}
        color={colors.onPrimary}
        size={scale(18)}
        style={styles.iconButton}
      />
    </View>
  );
};

export default Footer;
