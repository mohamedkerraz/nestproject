import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';

@Module({})
export class ConfigurationModule {
  static register(option: Record<string, string>): DynamicModule {
    return {
      module: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationService,
          useValue: new ConfigurationService(option),
        },
      ],
      exports: [ConfigurationService],
    };
  }
}
 