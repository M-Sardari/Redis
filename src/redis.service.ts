import { RedisModuleOptions } from './config/interfaces/redis-module-options.interface';
import { RedisClient } from './config/types.config';
import { createClient } from 'redis';

export class RedisService {
  private client: RedisClient;
  constructor(public options: RedisModuleOptions) {}

  async getClient(): Promise<RedisClient> {
    if (!this.client) await this.connect();
    return this.client;
  }

  private async connect(): Promise<void> {
    const {
      credentials: { host, port, username, password },
    } = this.options;
    const url = `redis://${host}:${port}`;
    this.client = createClient({ url, username, password });
    this.client.on('error', (err) => {
      console.error('Redis error, ', err);
      // process.exit(1);
    });
    this.client.on('connect', () =>
      console.log(`Redis successfully connected to: ${host}`),
    );
    await this.client.connect();
  }
}
