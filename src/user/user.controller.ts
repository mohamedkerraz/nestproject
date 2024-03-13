import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from 'src/logger/logger.service';


@Controller()
export class UserController {
  constructor(private readonly userService: UserService, private logger: LoggerService) {}

  @Get("/login/:login/:password")
  getlogin(@Param('login') login: string, @Param('password') password: string) {
    this.logger.log('Vous etes connecte en tant que ' + login);
    return this.userService.getlogin(login, password);
  }

  @Get("/users/")
  getusers() {    
    this.logger.log('Recherche de tous les users');
    return this.userService.getusers();
  }

  @Get("/user/:id")
  getuser(@Param('id') id: number) {    
    this.logger.log('Recherche du user id :' + id);
    return this.userService.getuser(id);
  }

  @Post("/createaccount/")
  postlogin(@Body() body: { login: string, password: string }) {
    const { login, password } = body;
    this.logger.log('Compte créer : ' + login);
    return this.userService.postlogin(login, password);
  }
}