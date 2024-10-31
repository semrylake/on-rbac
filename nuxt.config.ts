// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // pages: false,
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  // runtimeConfig: {
  //   public: {
  //     SERVICE_API_URL: process.env.SERVICE_URL
  //   }
  // }
});
