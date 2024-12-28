import { AuthRepository } from "../../domain/auth.repository";

export class FindLoggedUserQuery {
  constructor(private readonly authRepository: AuthRepository) {}
  handle() {
    return this.authRepository.getLoggedUser();
  }
}
