## Description

Redis is an open source, in-memory data structure store used as a database, cache, message broker, and streaming engine.

You can to use gadin-redis package easily and setup it.

## Usage

### Step 1: Installation

```sh
npm install gadin-redis
```

wait for the installation to finish.

### Step 2: Module initialization

you've added below code in your root module:
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

you've to inject RedisClient in your service and use redis methods like below:
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

## License

[MIT License](./LICENCE)

Author: Mohammad Sardari
