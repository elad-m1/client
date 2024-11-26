import {ReactNode, createContext, useState} from "react";

import {RANK} from "@/utils/types";

// !!! IMPORTANT !!!
//  any should be replaced with the actual user type later down the line
// !!! IMPORTANT !!!

const AuthContext = createContext({
  userData: {} as any | null,
  isAuthenticated: false,
  signIn: (newUserData: any) => {},
  signOut: () => {}
});

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<any | null>({
    name: "ישראל ישראלי",
    phoneNumber: "0501231234",
    rank: RANK.RISING_STAR
  });

  const signIn = (newUserdata: any) => {
    setIsAuthenticated(true);
    setUserData(newUserdata);
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{userData, isAuthenticated, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
