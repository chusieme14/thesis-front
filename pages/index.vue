<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        landing page
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{

  },
  head(){
    return {
      title:'Home',
      meta:[
        {
          hid:"description",
          name:"description",
          content:"this is the home page"
        }
      ]
    }
  }
}
</script>
