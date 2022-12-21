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
    defaultSender: `<no-reply>SocialBook info <info@gofirti.com>`,
    auth: {
      auth: {
        api_key: '334f63606218db503d7d7075a4e14c4e-eb38c18d-78eaa2a3',
        domain: 'sandbox5d83185aa2674b3bbff3f4e1137b5f38.mailgun.org',
      },
    },
  },
};
