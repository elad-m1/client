import {useEffect, useState} from 'react';
import {useBlurOnFulfill} from 'react-native-confirmation-code-field';

const useCode = () => {
  const [code, setCode] = useState('');
  const [resendThrottle, setResendThrottle] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (resendThrottle) return;
    setTimeout(() => {
      setResendThrottle(false);
    }, 60 * 1000);
  }, [resendThrottle]);

  const ref = useBlurOnFulfill({
    value: code,
    cellCount: 4,
  });

  const onCodeChange = (value: string) => setCode(value);

  const resendCode = () => {
    setResendThrottle(true);
  };

  // const submitCode = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // };

  return {
    code,
    onCodeChange,
    ref,
    loading,
    resendThrottle,
    resendCode,
    // submitCode,
  };
};

export default useCode;
