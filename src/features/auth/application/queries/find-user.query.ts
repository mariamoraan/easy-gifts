import { AuthRepository } from "../../domain/auth.repository";

export class FindUserQuery {
  constructor(private readonly authRepository: AuthRepository) {}
  handle(uid: string) {
    return this.authRepository.getUserById(uid);
  }
}
