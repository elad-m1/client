import {createContext} from 'react';

export const defaultColors = {
  primary: '#000',
  onPrimary: '#fff',
  background: '#fff',
  card: '#fff',
  border: '#e0e0e0',
  text: '#000',
  subText: '#353535',
  placeholder: '#959595',
  error: '#FA2945',
};

const ColorsContext = createContext(defaultColors);

export default ColorsContext;
