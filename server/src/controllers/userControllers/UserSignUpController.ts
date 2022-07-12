import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import validator from 'validator';

//repositories
import { UserRepository } from '@/repositories';

//use cases
import { UserSignUpUseCase } from '@/useCases';

export class UserSignUpController {
  constructor (
    private userSignUpUseCase: UserSignUpUseCase,
    private userRepository: UserRepository,
  ) {}

  public async handle (request: Request, response: Response) {
    const { username, email, password, profileImage } = request.body;

    if (!username) {
      response.status(400).json({
        data: null,
        error: 'Username is required',
      });

      return;
    }

    if (!email) {
      response.status(400).json({
        data: null,
        error: 'E-mail is required',
      });

      return;
    }

    if (!password) {
      response.status(400).json({
        data: null,
        error: 'Password is required',
      });

      return;
    }

    if (!profileImage) {
      response.status(400).json({
        data: null,
        error: 'Profile image is required',
      });

      return;
    }

    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      response.status(400).json({
        data: null,
        error: 'The email provided is invalid',
      });

      return;
    }

    const userAlreadyExists = await this.userRepository.readUser(email);

    if(userAlreadyExists) {
      response.status(409).json({
        data: null,
        error: 'Already exists a user with the same e-mail',
      });

      return;
    }

    const usernameLength = username.length;

    if (usernameLength > 20) {
      response.status(400).json({
        data: null,
        error: 'The username must have a length less than or equal to 20',
      });

      return;
    }

    const passwordLength = password.length;

    if (passwordLength < 8) {
      response.status(400).json({
        data: null,
        error: 'The password must have at least 8 characters',
      });

      return;
    }
    
    try {
      await this.userSignUpUseCase.execute({
        username,
        email,
        password: bcrypt.hashSync(password, 10),
        profileImage,
      });

      response.status(201).end();
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}