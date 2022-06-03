import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import validator from 'validator';
import { UserRepository } from '../repositories/UserRepository';

export class UserController {
  static async signUp(req: Request, res: Response) {
    try {
      const { body } = req;

      const isValidEmail = validator.isEmail(body.email);

      if (!isValidEmail) {
        res.status(400).json({
          data: null,
          error: 'The email provided is invalid',
        });

        return;
      }

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

  static async signIn(req: Request, res: Response) {
    try {
      const { body } = req;

      const user = await UserRepository.read(body.email);

      if (!user) {
        res.status(400).json({
          data: null,
          error: 'Invalid data',
        });

        return;
      }

      const receivedPassword = body.password;
      const passwordInDatabase = user.password!;

      const areTheSamePasswords = bcrypt.compareSync(receivedPassword, passwordInDatabase);

      if (!areTheSamePasswords) {
        res.status(400).json({
          data: null,
          error: 'Invalid data',
        });

        return;
      }

      delete user.password;
      
      res.status(200).json({ data: user });
    } catch (error: any) {
      res.status(500).json({
        data: null,
        error: error?.message,
      });
    }
  }
}