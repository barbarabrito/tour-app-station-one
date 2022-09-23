import dotenv from 'dotenv';

dotenv.config();

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PORT = process.env.PORT || 5000;

export default {
    port: PORT,
    dbUri: 'mongodb://localhost:27017/db_trip_app',
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: PUBLIC_KEY,
    privateKey: PRIVATE_KEY,
}