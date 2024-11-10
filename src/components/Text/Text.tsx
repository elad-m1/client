import {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {TextProps, Text as TextRN} from 'react-native';
interface Props {
  children: string;
}

const Text: FC<TextProps & Props> = memo(props => {
  const {t} = useTranslation();
  return <TextRN {...props}>{t(props.children)}</TextRN>;
});

export default Text;
