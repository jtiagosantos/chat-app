import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//use cases
import { UserSignInUseCase } from '@/useCases';

export class UserSignInController {
  constructor (
    private userSignUseCase: UserSignInUseCase,
  ) {}

  public async handle (request: Request, response: Response) {
    const { email, password } = request.body;

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

    try {
      const user = await this.userSignUseCase.execute(email);

      if (!user) {
        response.status(400).json({
          data: null,
          error: 'Invalid data',
        });

        return;
      }

      const areTheSamePasswords = bcrypt.compareSync(password, user.password!);

      if (!areTheSamePasswords) {
        response.status(400).json({
          data: null,
          error: 'Invalid data',
        });

        return;
      }

      const jwtSecretKey = process.env.JWT_SECRET_KEY!;

      const token = jwt.sign({ userId: user.id }, jwtSecretKey, { expiresIn: '1d' });

      delete user.password;
      delete user.email;
      delete user.createdAt;
      delete user.updatedAt;

      const data = { ...user, token };
      
      response.status(200).json(data);
    } catch (error) {
      const { message } = error as { message: string };

      response.status(500).json({
        data: null,
        error: message,
      });
    }
  }
}