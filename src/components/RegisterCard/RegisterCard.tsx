import {FC, ReactNode} from "react";
import {Pressable} from "react-native";

import {Text} from "@/components";

import useStyle from "./hooks/useStyle";

interface Props {
  onPress: () => void;
  icon: ReactNode;
  text: string;
  active: boolean;
}

const RegisterCard: FC<Props> = ({icon, text, active, onPress}) => {
  const {styles, colors} = useStyle();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.mainWrapper,
        active && styles.active,
        {opacity: pressed ? 0.5 : 1}
      ]}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default RegisterCard;
