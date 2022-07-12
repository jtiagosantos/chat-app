//repositories
import { UserRepository } from '@/repositories';

interface UserSignUpUseCaseDto {
  username: string;
  email: string;
  profileImage: string;
  password: string;
}

export class UserSignUpUseCase {
  constructor (
    private userRepository: UserRepository,
  ) {}

  public async execute (data: UserSignUpUseCaseDto) {
    const { username, email, password, profileImage } = data;

    await this.userRepository.createUser({
      username,
      email,
      password,
      profileImage,
    });
  }
}