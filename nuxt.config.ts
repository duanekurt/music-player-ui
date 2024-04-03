export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_API_URL,
      apiVersion: process.env.API_VERSION
    }
  }
})