import { AuthRepository } from "../../domain/auth.repository";

export class RecoverPasswordQuery {
  constructor(private readonly authRepository: AuthRepository) {}
  handle(email: string) {
    return this.authRepository.resetPassword(email);
  }
}
