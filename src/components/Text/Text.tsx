import {FC, memo} from "react";
import {useTranslation} from "react-i18next";
import {TextProps, Text as TextRN} from "react-native";

type argsObj = {
  [key: string]: string | undefined | null;
};

interface Props {
  i18nArgs?: argsObj;
  children: string;
}

const Text: FC<TextProps & Props> = memo(({i18nArgs, ...props}) => {
  const {t} = useTranslation();
  return (
    <TextRN {...props} style={[{textAlign: "left"}, props.style]}>
      {t(props.children, i18nArgs)}
    </TextRN>
  );
});

export default Text;
