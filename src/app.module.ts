import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { AppController } from './app.controller';

@Module({
  imports: [
    RedisModule.register({
      host: 'localhost',
      port: 6379,
      password: 'sardar',
      db: 0,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
