const Redis = require('ioredis');
const RateLimit = require('express-rate-limit');
const RateLimitRedis = require('rate-limit-redis');

exports.init = () =>
    new RateLimit({
        store: new RateLimitRedis({
            client: new Redis(),
        }),

        windowMs: 2 * 60 * 1000, // 2m
        max: 150, // 150 requests
        message: {
            message: 'Too many requests, please try again later.',
        },
    });
