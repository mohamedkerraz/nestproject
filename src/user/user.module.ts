import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CheckExistingUserMiddleware } from './check-user.middleware';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule.register()],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckExistingUserMiddleware).forRoutes('/createaccount/');
  }
}
