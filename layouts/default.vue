<template>
  <v-app>
    <app-header/>
    <Nuxt />
  </v-app>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader },
  name: 'DefaultLayout',
  data () {
    return {
      
    }
  }
}
</script>
