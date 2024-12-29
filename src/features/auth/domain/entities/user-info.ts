import { Credentials } from "./credentials";

export interface UserInfo extends Omit<Credentials, "password"> {
  name: string;
}
