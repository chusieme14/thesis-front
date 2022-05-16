import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: process.env.PORT, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    // secret_key: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmYmRmMjQxZTdjM2E2NTEzNTYwNmRkYzFmZWQyYzU1MjI2MzBhODciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiT0hNIENPTkNFUFRJT04iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2p0c2tYTDdwYndsbG8tVXhGSUtBS2J2T25lTkplc2FSWHRUYWxOPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3RpYm8taW4tc2hhcGUiLCJhdWQiOiJ0aWJvLWluLXNoYXBlIiwiYXV0aF90aW1lIjoxNjM1MjEyNzQ1LCJ1c2VyX2lkIjoiOEYzaUEybXUxNFNFNk84cENnbm1WUTA1M0p5MSIsInN1YiI6IjhGM2lBMm11MTRTRTZPOHBDZ25tVlEwNTNKeTEiLCJpYXQiOjE2MzUyMTI3NDUsImV4cCI6MTYzNTIxNjM0NSwiZW1haWwiOiJvaG0uY29uY2VwdGlvbkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwOTY5MzEzNzQ1NzIyMTEwMTQ2OCJdLCJlbWFpbCI6WyJvaG0uY29uY2VwdGlvbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.Ae6-T_9E7CnTs9H7V5DHMwAE8KhSEMkZeWt1D__nk8ZbThVUCGSnHOXBzzcB7q7V7oaHAviTFV3VRXVGS2RRuFu6vEC1OlgI03-m5SFVUmvNqoQxAUPFtrGpymzM8eVH8azvFJx4sMJoGEG7Fory-GBMQDKalNqgs4Ny7t8x_-u8sGp5WDuSuWr5JUHPAT65hMlUX81L7_gbc-xhGm-0asESDZcIbWRD_mxcoZaR59PbljVnLbdhwcq5VMTw98foQQjEhOcexaw8pl9M2X8Bnx6h33cRWMdjk2-5ma-lVrB3oYK3JRHyJL2jYqUgichztFDhsSSeuIvzarjqE3ciyQ',
    baseUrl: process.env.API_URL,
    imageUrl: process.env.IMAGE_URL,
    appUrl: process.env.APP_URL
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - thesis-front',
    title: 'thesis-front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    redirect: {
        logout: '/login',
        login: '/login',
        callback: '/login',
    },
    strategies: {
        local: {
            token: {
                property: 'access_token',
                global: true,
            },
            user: {
                property: '',
            },
            tokenType: '',
            endpoints: {
                login: { url: 'login', method: 'post' },
                logout: { url: 'logout', method: 'post' },
                user: { url: 'user-details', method: 'get' }
            }
        }
    },
    // plugins: ['@/plugins/auth-lang-redirect.js']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:process.env.API_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#f39c12',
          success: '#006048'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
