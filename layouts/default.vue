<template>
  <v-app>
    <!-- <app-header/> -->
    <!-- <div class="body">
      <Nuxt />
    </div> -->
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

<style scoped>
 .body {
   margin-top: 60px;
 }
</style>
