import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt';

export class UserController {
  static async signUp(req: Request, res: Response) {
    try {
      const { body } = req;

      const userAlreadyExists = await UserRepository.read(body.email);

      if(userAlreadyExists) {
        res.status(400).json({
          data: null,
          error: 'Already exists a user with the same e-mail',
        });

        return;
      }

      const usernameLength = body.username.length;

      if (usernameLength > 20) {
        res.status(400).json({
          data: null,
          error: 'The username must have a length less than or equal to 20',
        });

        return;
      }

      const passwordLength = body.password.length;

      if (passwordLength < 8) {
        res.status(400).json({
          data: null,
          error: 'The password must have at least 8 characters',
        });

        return;
      }

      const data = {
        ...body,
        password: bcrypt.hashSync(body.password, 10),
      };

      await UserRepository.create(data);
      
      res.end();
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }
}