export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Miromax',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel='stylesheet', href='https://fonts.googleapis.com/css?family=Montserrat' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/modal' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg'
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  build: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   extend (config, { isDev, isClient }) {
  //     console.log(isDev, isClient);
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         test: /\.css$/,
  //         loader: ['sass-loader', 'css-loader', 'vue-style-loader'],
  //         exclude: /(node_modules)/
  //       });
  //     }
  //   },
  // },

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Montserrat: [400, 600, 700]
    }
  }
}
