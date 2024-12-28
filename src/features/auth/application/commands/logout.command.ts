import { AuthRepository } from "../../domain/auth.repository";

export class LogoutCommand {
  constructor(private readonly authRepository: AuthRepository) {}
  handle() {
    return this.authRepository.logout();
  }
}
