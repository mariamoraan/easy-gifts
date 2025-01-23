import { AuthRepository } from "../../domain/auth.repository";

export class OnAuthChangeSubscriber {
  constructor(private readonly authRepository: AuthRepository) {}
  handle(onChange: (user: string | undefined) => Promise<void>) {
    return this.authRepository.onAuthChangeSubscriber(onChange);
  }
}
