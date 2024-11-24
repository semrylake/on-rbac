// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "http://localhost:7778",
    },
  },
  app: {
    baseURL: "/on-rbac/",
  },
  nitro: {
    preset: "static",
  },
});
