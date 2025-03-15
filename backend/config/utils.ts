import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const REDIS_URL = process.env.REDIS_URL;
const ACCESS_COOKIE_MAXAGE = process.env.ACCESS_COOKIE_MAXAGE ? Number(process.env.ACCESS_COOKIE_MAXAGE) : 900000; // default 15 min
const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || '1h'; // default to '1h' if not set
const REFRESH_COOKIE_MAXAGE = process.env.REFRESH_COOKIE_MAXAGE ? Number(process.env.REFRESH_COOKIE_MAXAGE) : 604800000; // default 7 days
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d'; // default to '7d' if not set
const JWT_SECRET = process.env.JWT_SECRET;
const FRONTEND_URL = process.env.FRONTEND_URL;
const NODE_ENV = process.env.NODE_ENV;

export {
  MONGODB_URI,
  PORT,
  REDIS_URL,
  ACCESS_COOKIE_MAXAGE,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_COOKIE_MAXAGE,
  REFRESH_TOKEN_EXPIRES_IN,
  JWT_SECRET,
  FRONTEND_URL,
  NODE_ENV,
};
