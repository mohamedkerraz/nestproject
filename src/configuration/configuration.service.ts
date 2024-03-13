import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  constructor(private options: Record<string, string>) {}

  get(key: string): string {
    return this.options[key];
  }
}
 