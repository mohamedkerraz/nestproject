import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'
import { ConfigurationModule } from './configuration/configuration.module'
import { LoggerModule } from './logger/logger.module';


@Module({
  imports: [
    ConfigurationModule.register({
      databaseUri : 'localhost:3637'
    }),
    LoggerModule.register(),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
