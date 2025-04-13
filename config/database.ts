export default ({ env }) => {
  // Retrieve important environment variables
  const databaseUrl = env('DATABASE_URL');
  const nodeEnv = env('NODE_ENV');

  // Log the values for debugging purposes
  console.log('DATABASE_URL:', databaseUrl);
  console.log('NODE_ENV:', nodeEnv);

  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: databaseUrl,
        // Force SSL encryption
        ssl: { require: true, rejectUnauthorized: false },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
