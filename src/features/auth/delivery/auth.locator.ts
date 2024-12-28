import { LoginCommand } from "../application/commands/login.command";
import { LogoutCommand } from "../application/commands/logout.command";
import { SignUpCommand } from "../application/commands/sign-up.command";
import { FindLoggedUserQuery } from "../application/queries/find-logged-user.query";
import { AuthRepository } from "../domain/auth.repository";
import { AuthFirebaseRepository } from "../infrastructure/auth-firebase.repository";

export class AuthLocator {
  static getRepository(): AuthRepository {
    return new AuthFirebaseRepository();
  }
  static getSignUpCommand() {
    return new SignUpCommand(this.getRepository());
  }
  static getLoginCommand() {
    return new LoginCommand(this.getRepository());
  }
  static getLogoutCommand() {
    return new LogoutCommand(this.getRepository());
  }
  static getFindLoggedUserQuery() {
    return new FindLoggedUserQuery(this.getRepository());
  }
}
