import { config } from 'dotenv';
config();
export const environment = {
  database: {
    name: 'default',
    type: 'postgres',
    host: process.env.CORE_DB_HOST,
    port: parseInt(process.env.CORE_DB_PORT),
    username: process.env.CORE_DB_USER,
    password: process.env.CORE_DB_PASSWORD,
    database: process.env.CORE_DB,
    entities: [],
    synchronize: true,
  },
  jwtSecrete: 'my-secrete',
  redis: {
    // host: process.env.NX_REDIS_HOST,
    port: process.env.NX_REDIS_PORT,
  },
  email: {
    defaultSender: `<no-reply>SocialBook <info@socialBook.com>`,
  },
};
