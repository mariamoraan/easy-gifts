import { UserInfo } from "./user-info";
import { UserId } from "./user-id";

export interface User extends UserInfo {
  id: UserId;
}
