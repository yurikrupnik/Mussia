import path from 'path';

export const root = path.join(__dirname + '/..');
export const env = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 4000;
export const ip = process.env.IP || '0.0.0.0' || 'localhost';
export const host = process.env.WEBSITE_HOSTNAME || `http://${ip}:${port}`;
export const databaseUrl = process.env.DATABASE_URL ||'mongodb://localhost/mussia';
export const apiPrefix = '/api';
