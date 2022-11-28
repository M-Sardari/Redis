## Description

Simple instance of Redis.

## Usage

### Step 1: Installation

```sh
npm install gadin-redis
```

wait for the installation to finish.

### Step 2: Module initialization

You've added below code in your root module:
```ts
@Module({
    imports: [
        RedisModule.forRoot({
            credentials: {
                host: 'host',
                port: 6379,
                username:'user',
                password:'pass'
            }
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
```

### Notice
``
The username and password are optional.
``

### Step 3: Use in Services

You've to inject RedisClient in your service and use redis methods like below:
```ts
export class AppService{
    constructor(@Inject(REDIS) private redis: RedisClient) {
    }

    async test() {
        await this.redis.set("key", "value")
    }
}

```

### Hint
``
Import RedisClinet and REDIS from the gadin-redis 
``

## Author
[Mohammad Sardari](mailto:m.sardari@live.com)

## License

[MIT License](./LICENCE)


