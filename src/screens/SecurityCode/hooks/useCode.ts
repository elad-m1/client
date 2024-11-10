import {useEffect, useState} from 'react';
import {useBlurOnFulfill} from 'react-native-confirmation-code-field';

const useCode = (goToRegister: () => void) => {
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

  const activateResendThrottle = () => setResendThrottle(true);

  const submitCode = async () => {
    setLoading(true);
    // await onSubmit();
    setLoading(false);
    goToRegister();
  };

  return {
    code,
    onCodeChange,
    ref,
    loading,
    resendThrottle,
    activateResendThrottle,
    submitCode,
  };
};

export default useCode;
