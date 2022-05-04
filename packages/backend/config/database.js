module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'boutchaz'),
      user: env('DATABASE_USERNAME', 'boutchaz'),
      password: env('DATABASE_PASSWORD', 'boutchaz'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
