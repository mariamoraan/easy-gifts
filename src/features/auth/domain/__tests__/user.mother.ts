import { User } from "../entities/user";

export class UserMother {
  static user(config?: Partial<User>): User {
    return { id: "user-id", name: "User", email: "user@email.com", ...config };
  }
  static andrea(): User {
    return {
      id: "11225546",
      name: "Andrea Calvo",
      email: "andreacalvo@gmail.com",
    };
  }
}
