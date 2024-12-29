import { AuthRepository } from "../../domain/auth.repository";
import { Credentials } from "../../domain/entities/credentials";
import { UserInfo } from "../../domain/entities/user-info";

export class SignUpCommand {
  constructor(private readonly authRepository: AuthRepository) {}
  handle(authUser: UserInfo, credentials: Credentials) {
    return this.authRepository.signup(authUser, credentials);
  }
}
