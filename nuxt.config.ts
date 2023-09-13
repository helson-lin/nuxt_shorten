// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  modules: [
    'nuxt-mongoose',
  ],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
  },
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        /* redis connector options */
        port: process.env.REDIS_PORT, // Redis port
        host: process.env.REDIS_HOST, // Redis host
        username: process.env.REDIS_USERNAME, // needs Redis >= 6
        password: process.env.REDIS_PASSWORD,
        db: 0, // Defaults to 0
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
});
