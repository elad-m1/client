import {forwardRef, ForwardRefExoticComponent, RefAttributes} from 'react';
import {ActivityIndicator, Text as RNText, TextInput} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

import {Text} from '@/components';
import {SCREEN_WIDTH} from '@/utils/sizing';
import useMisc from './hooks/useMisc';

interface Props {
  code: string;
  onCodeChange: (value: string) => void;
  submitCode: () => void;
  loading: boolean;
}

const CodeInput: ForwardRefExoticComponent<Props & RefAttributes<TextInput>> =
  forwardRef(({code, onCodeChange, submitCode, loading}, ref) => {
    const {styles, colors} = useMisc();

    return (
      <>
        <CodeField
          ref={ref}
          value={code}
          cellCount={4}
          onChangeText={onCodeChange}
          onBlur={submitCode}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          rootStyle={{
            width: SCREEN_WIDTH * 0.65,
            alignSelf: 'center',
            direction: 'ltr',
          }}
          renderCell={({index, symbol, isFocused}) => (
            <RNText
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                false && styles.errorCell,
              ]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </RNText>
          )}
        />
        {false && (
          <Text style={[styles.subTitle, styles.errorText]}>
            verification.incorrect
          </Text>
        )}
        {loading && (
          <ActivityIndicator
            color={colors.primary}
            size="large"
            style={{marginTop: SCREEN_WIDTH * 0.25}}
          />
        )}
      </>
    );
  });

export default CodeInput;
