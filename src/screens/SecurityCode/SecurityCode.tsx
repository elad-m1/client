import {FC} from 'react';
import {View, Text as RNText} from 'react-native';
import {useTranslation} from 'react-i18next';

import {Text, Header} from '@/components';
import {CodeInput, Resend} from './components';
import {useMisc, useCode, useNav} from './hooks';

const SecurityCode: FC = () => {
  const {goToRegister, phoneData} = useNav();
  const codeHook = useCode(goToRegister);
  const {styles} = useMisc();

  const {t} = useTranslation();

  return (
    <View style={{flex: 1}}>
      <Header title={t('verification.header')} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>verification.title</Text>
        <Text style={styles.subTitle}>verification.subtitle</Text>
        <RNText style={styles.subTitle}>
          {phoneData?.code}-
          {phoneData?.phoneNumber.replace(
            /^(\d{3})(\d{3})(\d{0,4})$/,
            (_match, p1, p2, p3) => `${p1}-${p2}-${p3}`,
          )}
        </RNText>
      </View>
      <CodeInput {...codeHook} />
      <Resend
        activateResendThrottle={codeHook.activateResendThrottle}
        resendThrottle={codeHook.resendThrottle}
      />
    </View>
  );
};

export default SecurityCode;
