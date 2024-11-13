import {useContext} from "react";
import {StyleSheet} from "react-native";

import ThemeContext from "@/context/theme/ThemeContext";
import {scale} from "@/utils/sizing";

const useMisc = () => {
  const {colors} = useContext(ThemeContext);
  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: colors.card,
      borderRadius: scale(6),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 2
    },
    image: {
      width: "100%",
      height: scale(120),
      borderTopStartRadius: scale(6),
      borderTopEndRadius: scale(6)
    },
    detailsWrapper: {
      paddingHorizontal: scale(21),
      paddingVertical: scale(16)
    },
    nameRatingWrapper: {
      flexDirection: "row",
      alignItems: "center"
    },
    name: {
      fontSize: scale(14),
      color: colors.text,
      fontWeight: "bold",
      textAlign: "left"
    },
    ratingWrapper: {
      flexDirection: "row",
      alignItems: "center"
    },
    rating: {
      fontSize: scale(14),
      color: colors.textSecondary,
      textAlign: "left"
    },
    price: {
      fontSize: scale(14),
      color: colors.text,
      textAlign: "left"
    }
  });

  return {styles};
};

export default useMisc;
