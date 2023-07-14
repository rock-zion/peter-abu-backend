module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "d9b0df66ff97a666027e665707b4e3e7"),
  },
  auth: {
    secret: env("ADMIN_JWT_SECRET", "77b2c87dbab4e1697bec244226fbd1b3"),
  },
});
