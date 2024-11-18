import React, {FC, useContext} from "react";
import {View} from "react-native";

import {ProductCard, Text} from "@/components";
import {ProductContext} from "@/context";

import {useStyle} from "./hooks";

const Recommendations: FC = () => {
  const {styles} = useStyle();
  const {openProduct} = useContext(ProductContext);

  const firstArr = Array.from({length: 2});
  const secondArr = Array.from({length: 2});
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>cart.recommendations</Text>
      <View style={styles.columnsWrapper}>
        <View style={styles.column}>
          {firstArr.map((_, index) => (
            <ProductCard
              key={index}
              name="שמפו נקה 7"
              imageUrl="https://static1.srcdn.com/wordpress/wp-content/uploads/peter-griffin-family-guy.jpg"
              onPress={() => openProduct((Math.random() * 1000).toString())}
              price={12}
              rating={3.8}
              elevation={false}
            />
          ))}
        </View>
        <View style={styles.column}>
          {secondArr.map((_, index) => (
            <ProductCard
              key={index}
              name="שמפו נקה 7"
              imageUrl="https://static1.srcdn.com/wordpress/wp-content/uploads/peter-griffin-family-guy.jpg"
              onPress={() => openProduct((Math.random() * 1000).toString())}
              price={12}
              rating={3.8}
              elevation={false}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Recommendations;
