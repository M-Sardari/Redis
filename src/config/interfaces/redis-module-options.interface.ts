type RedisCredentials = {
  host: string;
  port: number;
  username?: string;
  password?: string;
};

export interface RedisModuleOptions {
  credentials: RedisCredentials;
}
