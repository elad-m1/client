import {useEffect, useState} from 'react';
import {useBlurOnFulfill} from 'react-native-confirmation-code-field';

const useCode = (onSubmit: () => Promise<void>) => {
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

  const toggleResendThrottle = () => setResendThrottle(value => !value);

  const submitCode = async () => {
    setLoading(true);
    await onSubmit();
    setLoading(false);
  };

  return {
    code,
    onCodeChange,
    ref,
    loading,
    resendThrottle,
    toggleResendThrottle,
    submitCode,
  };
};

export default useCode;
