import {FC} from 'react';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

import {VerificationStackRootParams} from '../Verification';
import Header from '../components/Header/Header';
import {scale, SCREEN_WIDTH} from '../utils/sizing';
import useMisc from './hooks/useMisc';
import useCode from './hooks/useCode';

interface Props {
  sendVerifCode: (phoneNumber: string) => void;
  onSubmit: () => Promise<void>;
  codeError: boolean;
}

const SecurityCode: FC<Props> = ({onSubmit, codeError, sendVerifCode}) => {
  const {
    code,
    onCodeChange,
    ref,
    loading,
    resendThrottle,
    toggleResendThrottle,
    submitCode,
  } = useCode(onSubmit);
  const route = useRoute<RouteProp<VerificationStackRootParams>>();
  const phoneData = route.params as {code: string; phoneNumber: string};
  const {styles, colors} = useMisc();
  return (
    <View style={{flex: 1}}>
      <Header title="Verification Code" />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Verify Security Code</Text>
        <Text style={styles.subTitle}>
          We've just sent a verification code to
        </Text>
        <Text style={styles.subTitle}>
          {phoneData.code}-
          {phoneData.phoneNumber.replace(
            /^(\d{3})(\d{3})(\d{0,4})$/,
            (_match, p1, p2, p3) => `${p1}-${p2}-${p3}`,
          )}
        </Text>
      </View>
      <CodeField
        ref={ref}
        value={code}
        cellCount={4}
        onChangeText={onCodeChange}
        onBlur={submitCode}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={{width: SCREEN_WIDTH * 0.65, alignSelf: 'center'}}
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              codeError && styles.errorCell,
            ]}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {codeError && (
        <Text style={[styles.subTitle, styles.errorText]}>Incorrect code</Text>
      )}
      {loading && (
        <ActivityIndicator
          color={colors.primary}
          size="large"
          style={{marginTop: SCREEN_WIDTH * 0.25}}
        />
      )}
      <View style={styles.resendWrapper}>
        {resendThrottle ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subTitle}>Re-sending is possible after</Text>
            <Text style={[styles.subTitle, {fontWeight: '900'}]}>
              {' '}
              a minute
            </Text>
          </View>
        ) : (
          <Pressable
            onPress={() => {
              sendVerifCode(phoneData.phoneNumber);
              toggleResendThrottle();
            }}
            style={({pressed}) => ({
              flexDirection: 'row',
              alignItems: 'center',
              opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesomeIcon
              icon={faRotateRight}
              color={colors.primary}
              size={scale(16)}
            />
            <Text style={styles.resendText}>Resend code</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default SecurityCode;
