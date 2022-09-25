import dotenv from 'dotenv';

dotenv.config();

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;


export default {
    port: PORT,
    // dbUri: 'mongodb://localhost:27017/db_trip_app',
    dbUri: `mongodb+srv://${DB_USER}:${DB_PASS}@tour-app-cluster.mhbkopr.mongodb.net/?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: PUBLIC_KEY,
    privateKey: PRIVATE_KEY,
}