import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { AddRq } from './redis-rq-rs';

@Controller()
export class AppController {
  constructor(private readonly redisService: RedisService) {}

  @Get()
  async get(@Query('key') key): Promise<string> {
    const redis = this.redisService.getClient();
    return await redis.get(key);
  }

  @Post()
  async add(@Body() body: AddRq): Promise<string> {
    const redis = this.redisService.getClient();
    return await redis.set(body.key, body.value);
  }

  @Delete()
  async delete(@Query('key') key): Promise<string> {
    const redis = this.redisService.getClient();
    await redis.del(key);
    return 'Successfully removed.';
  }
}
