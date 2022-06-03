import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

interface Payload extends JwtPayload {
  userId: number;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;

  if (!token) {
    res.status(401).json({ data: null, error: 'Unauthorized' });
    return;
  }

  const jwtSecretKey = process.env.JWT_SECRET_KEY!;

  try {
    const { userId } = jwt.verify(token, jwtSecretKey) as Payload;

    req.userId = userId;

    return next();
  } catch {
    res.status(401).json({ data: null, error: 'Unauthorized' });
    return;
  }

};