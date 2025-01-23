import { LoginCommand } from "../application/commands/login.command";
import { LogoutCommand } from "../application/commands/logout.command";
import { OnAuthChangeSubscriber } from "../application/commands/on-auth-change-subscriber.command";
import { SignUpCommand } from "../application/commands/sign-up.command";
import { FindLoggedUserQuery } from "../application/queries/find-logged-user.query";
import { RecoverPasswordQuery } from "../application/queries/recover-password.query";
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
  static getRecoverPasswordQuery() {
    return new RecoverPasswordQuery(this.getRepository());
  }
  static getOnAuthChangeSubscriber() {
    return new OnAuthChangeSubscriber(this.getRepository());
  }
}
