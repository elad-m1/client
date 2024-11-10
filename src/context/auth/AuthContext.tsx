import {createContext, ReactNode, useState} from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  signOut: () => {},
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signOut = () => {};

  return (
    <AuthContext.Provider value={{isAuthenticated, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
