//repositories
import { UserRepository } from '@/repositories';

export class UserSignInUseCase {
  constructor (
    private userRepository: UserRepository,
  ) {}

  public async execute (email: string) {
    return await this.userRepository.readUser(email);
  }
}