import * as dotenv from 'dotenv';

dotenv.config();

export const AppConfig = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "your_jwt_secret",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",
    DB_URL: process.env.DB_URL || "localhost"
};
