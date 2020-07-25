// Middleware for content length
const redis = require('redis');

const REDIS_PORT: string | number = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

export function reqHeaders(req: any, res: any, next: any) {
  try {
    const length = req.headers['content-length'];
    console.log(`content length: ${length} charachters`);
    client.setex('temp', 3600, length);
  } catch (err) {
    console.log(err.message);
  }

  next();
}
