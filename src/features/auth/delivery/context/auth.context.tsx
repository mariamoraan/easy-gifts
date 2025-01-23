import { createContext, useContext, useEffect, useState } from "react";
import { AuthLocator } from "../auth.locator";
import { Credentials } from "../../domain/entities/credentials";
import { UserInfo } from "../../domain/entities/user-info";
import { User } from "../../domain/entities/user";

interface AuthState {
  user?: User;
  signUp: (authUser: UserInfo, credentials: Credentials) => Promise<void>;
  login: (credentials: Credentials) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthState>({
  user: undefined,
  signUp: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  login: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  logout: function (): Promise<void> {
    throw new Error("Function not implemented.");
  },
  isAuthenticated: true,
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const onAuthChange = async (user: string | undefined) => {
      if (user) {
        const user = await AuthLocator.getFindLoggedUserQuery().handle();
        setIsAuthenticated(true);
        setUser(user);
      } else {
        setIsAuthenticated(false);
        setUser(undefined);
      }
    };
    AuthLocator.getOnAuthChangeSubscriber().handle(onAuthChange);
  }, []);

  const isValidUserInfo = (authUser: UserInfo): boolean => {
    if (!authUser.email || !authUser.name) return false;
    return true;
  };

  const isValidCredentials = (credentials: Credentials): boolean => {
    if (!credentials.email || !credentials.password) return false;
    return true;
  };

  const signUp = async (userInfo: UserInfo, credentials: Credentials) => {
    if (!isValidUserInfo(userInfo)) return;
    if (!isValidCredentials(credentials)) return;
    try {
      const user = await AuthLocator.getSignUpCommand().handle(
        userInfo,
        credentials
      );
      setUser(user);
    } catch (error: any) {
      if (error?.code) throw Error(error?.code);
      throw Error(JSON.stringify(error));
    }
  };

  const login = async (credentials: Credentials) => {
    if (!isValidCredentials(credentials)) return;
    try {
      const user = await AuthLocator.getLoginCommand().handle(credentials);
      setUser(user);
    } catch (error: any) {
      if (error?.code) throw Error(error?.code);
      throw Error(JSON.stringify(error));
    }
  };

  const logout = async () => {
    await AuthLocator.getLogoutCommand().handle();
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ user, signUp, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
