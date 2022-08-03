import { RedisModuleOptions } from './config/interfaces/redis-module-options.interface';
import { RedisClient } from './config/types.config';
import { DynamicModule } from '@nestjs/common';
import { RedisService } from './redis.service';
import { REDIS } from './config/tokens.config';

export class RedisModule {
  static forRoot(options: RedisModuleOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: REDIS,
          useFactory: async (): Promise<RedisClient> => {
            const redis = new RedisService(options);
            return await redis.getClient();
          },
        },
        RedisService,
      ],
      exports: [REDIS],
      global: true,
    };
  }
}
