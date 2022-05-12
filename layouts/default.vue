<template>
  <v-app>
    <app-header v-if="$auth.loggedIn"/>
    <div v-if="$auth.loggedIn" class="body">
      <Nuxt />
    </div>
    <Nuxt v-if="!$auth.loggedIn" />
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

<style scoped>
 .body {
   margin-top: 60px;
   overflow: hidden;
 }
</style>
