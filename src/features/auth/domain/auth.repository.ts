import { Credentials } from "./entities/credentials";
import { User } from "./entities/user";
import { UserInfo } from "./entities/user-info";

export interface AuthRepository {
  signup: (
    user: UserInfo,
    credentials: Credentials
  ) => Promise<User | undefined>;
  login: (credentials: Credentials) => Promise<User | undefined>;
  logout: () => Promise<void>;
  getLoggedUser: () => Promise<User | undefined>;
  resetPassword: (email: string) => Promise<void>;
}
