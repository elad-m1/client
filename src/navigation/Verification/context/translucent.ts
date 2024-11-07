import {createContext} from 'react';

const defaultValue = {
  isTranslucent: false,
  toggleTranslucent: () => {},
};

const TranslucentContext = createContext(defaultValue);

export default TranslucentContext;
