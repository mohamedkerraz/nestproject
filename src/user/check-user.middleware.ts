import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';

@Injectable()
export class CheckExistingUserMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { login } = req.body;

    const userExists = await this.userService.checkUserExistence(login);

    if (userExists) {
      return res.status(409).json({ message: 'Un compte user avec ce login existe déjà.' });
    }

    next();
  }
}