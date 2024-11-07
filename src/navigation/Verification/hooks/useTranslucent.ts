import {useState} from 'react';

const useTranslucent = (translucent?: boolean) => {
  const [isTranslucent, setIsTranslecent] = useState(translucent ?? false);

  const toggleTranslucent = () => setIsTranslecent(state => !state);

  return {isTranslucent, toggleTranslucent};
};

export default useTranslucent;
