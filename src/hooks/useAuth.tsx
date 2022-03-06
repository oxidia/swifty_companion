import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

export type AuthState =
  | {
      isAuth: true;
      accessToken: string;
      refreshToken: string;
      accessTokenExpirationDate: string;
    }
  | {
      isAuth: false;
      accessToken: null;
      refreshToken: null;
      accessTokenExpirationDate: null;
    };

export type AuthProviderProps = {
  children: ReactNode;
};

type AuthProviderReturn = AuthState & {
  setTokens: (
    accessToken: string,
    refreshToken: string,
    accessTokenExpirationDate: string,
  ) => void;
};

const authContext = createContext<AuthProviderReturn>({
  isAuth: false,
  accessToken: null,
  refreshToken: null,
  accessTokenExpirationDate: null,
  setTokens: () => {
    // dummy function
  },
});

export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;
  const auth = useAuthProvider();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuthProvider(): AuthProviderReturn {
  const [state, setState] = useState<AuthState>({
    isAuth: false,
    accessToken: null,
    refreshToken: null,
    accessTokenExpirationDate: null,
  });

  const setTokens = useCallback(function setTokens(
    accessToken: string,
    refreshToken: string,
    accessTokenExpirationDate: string,
  ) {
    setState({
      isAuth: true,
      accessToken,
      refreshToken,
      accessTokenExpirationDate: accessTokenExpirationDate,
    });
  },
  []);

  return { ...state, setTokens };
}
